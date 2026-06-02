from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
import pandas as pd
import pdfplumber
import openai
from reportlab.platypus import SimpleDocTemplate, Table

from app.database import get_db
from app.models import Invoice
from app.schemas import InvoiceCreate, InvoiceResponse
from app.deps import get_current_user

router = APIRouter(prefix="/invoices", tags=["Invoices"])

@router.post("", response_model=InvoiceResponse)
def create_invoice(invoice: InvoiceCreate, db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    new_invoice = Invoice(
        user_id=user_id,
        client_name=invoice.client_name,
        amount=invoice.amount,
        invoice_date=invoice.invoice_date
    )
    db.add(new_invoice)
    db.commit()
    db.refresh(new_invoice)
    return new_invoice

@router.get("", response_model=list[InvoiceResponse])
def get_invoices(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    return db.query(Invoice).filter(Invoice.user_id == user_id).all()

@router.put("/{invoice_id}", response_model=InvoiceResponse)
def update_invoice(invoice_id: int, data: InvoiceCreate, db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    invoice = db.query(Invoice).filter(Invoice.id == invoice_id, Invoice.user_id == user_id).first()
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    invoice.client_name = data.client_name
    invoice.amount = data.amount
    invoice.invoice_date = data.invoice_date
    
    db.commit()
    db.refresh(invoice)
    return invoice

@router.delete("/{invoice_id}")
def delete_invoice(invoice_id: int, db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    invoice = db.query(Invoice).filter(Invoice.id == invoice_id, Invoice.user_id == user_id).first()
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")
    
    db.delete(invoice)
    db.commit()
    return {"message": "deleted"}

@router.post("/ai-extract")
def ai_extract(file: UploadFile = File(...), user_id: int = Depends(get_current_user)):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""

    prompt = f"Extract invoice data as JSON with elements: client_name, amount, date.\n\nTEXT:\n{text}"
    
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

@router.get("/export/excel")
def export_excel(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    invoices = db.query(Invoice).filter(Invoice.user_id == user_id).all()
    data = [{"client": i.client_name, "amount": i.amount, "date": i.invoice_date} for i in invoices]
    
    df = pd.DataFrame(data)
    file_path = f"invoices_{user_id}.xlsx"
    df.to_excel(file_path, index=False)
    return FileResponse(file_path)

@router.get("/export/pdf")
def export_pdf(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    invoices = db.query(Invoice).filter(Invoice.user_id == user_id).all()
    data = [["Client", "Amount", "Date"]]
    for i in invoices:
        data.append([i.client_name, i.amount, str(i.invoice_date)])

    file_path = f"invoices_{user_id}.pdf"
    pdf = SimpleDocTemplate(file_path)
    table = Table(data)
    pdf.build([table])
    return FileResponse(file_path)