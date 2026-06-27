from fastapi import FastAPI,  UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from models import Invoice
from schemas import InvoiceCreate
from sqlalchemy import func

from reportlab.platypus import SimpleDocTemplate, Table
import pandas as pd
from fastapi.responses import FileResponse

import pdfplumber
import openai

from database import SessionLocal 
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stats")
def get_stats():
    return {
        "total_revenue": 250000,
        "invoices": 35
    }

# @app.post("/invoices")
# def create_invoice(invoice: InvoiceCreate):
#     db = SessionLocal()
#     new_invoice = Invoice(
#         client_name=invoice.client_name,
#         amount=invoice.amount,
#         invoice_date=invoice.invoice_date
#     )

#     db.add(new_invoice)
#     db.commit()
#     db.refresh(new_invoice)
#     db.close()

#     return new_invoice

@app.get("/invoices")
def get_invoice():
   
    db = SessionLocal()
    invoices = db.query(Invoice).all()
    db.close()
    return invoices

@app.post("/invoices")
def create_invoice(invoice: InvoiceCreate, user_id: int = Depends(get_current_user)):
    db = SessionLocal()

    new_invoice = Invoice(
        user_id=user_id,
        client_name=invoice.client_name,
        amount=invoice.amount,
        invoice_date=invoice.invoice_date
    )

    db.add(new_invoice)
    db.commit()
    db.refresh(new_invoice)
    db.close()

    return new_invoice
# @app.get("/analytics/monthly")
# def get_monthly():
#     db = SessionLocal()

#     results = db.query(
#         func.to_char(Invoice.invoice_date, "YYYY-MM").label("month"),
#         func.sum(Invoice.amount).label("total")
#     ).group_by("month").all()

#     db.close()

#     return [{"month": r[0], "total": r[1]} for r in results]


@app.get("/analytics/monthly")
def get_monthly(user_id: int = Depends(get_current_user)):
    db = SessionLocal()

    results = db.query(
        func.to_char(Invoice.invoice_date, "YYYY-MM").label("month"),
        func.sum(Invoice.amount)
    ).filter(Invoice.user_id == user_id)\
     .group_by("month").all()

    db.close()

    return [{"month": r[0], "total": r[1]} for r in results]

@app.get("/analytics/yearly")
def get_yearly():
    db = SessionLocal()

    results = db.query(
        func.to_char(Invoice.invoice_date, "YYYY").label("year"),
        func.sum(Invoice.amount).label("total")
    ).group_by("year").all()

    db.close()

    return [{"year": r[0], "total": r[1]} for r in results]


@app.get("/clients/top")
def get_top_clients():
    db = SessionLocal()

    results = db.query(
        Invoice.client_name,
        func.sum(Invoice.amount).label("total")
    ).group_by(Invoice.client_name)\
     .order_by(func.sum(Invoice.amount).desc())\
     .limit(10).all()

    db.close()

    return [{"client": r[0], "total": r[1]} for r in results]



@app.delete("/invoices/{invoice_id}")
def delete_invoice(invoice_id: int):
    db = SessionLocal()
    invoice = db.query(Invoice).filter(Invoice.id == invoice_id).first()

    if not invoice:
        return {"error": "Not found"}

    db.delete(invoice)
    db.commit()
    db.close()

    return {"message": "deleted"}

@app.put("/invoices/{invoice_id}")
def update_invoice(invoice_id: int, data: InvoiceCreate):
    db = SessionLocal()
    invoice = db.query(Invoice).filter(Invoice.id == invoice_id).first()

    invoice.client_name = data.client_name
    invoice.amount = data.amount
    invoice.invoice_date = data.invoice_date

    db.commit()
    db.close()

    return invoice



@app.post("/ai/invoice-extract")
def ai_extract(file: UploadFile = File(...)):
    text = ""

    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""

    prompt = f"""
Extract invoice data as JSON:
- client_name
- amount
- date

TEXT:
{text}
"""

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response["choices"][0]["message"]["content"]



@app.get("/export/excel")
def export_excel():
    db = SessionLocal()
    invoices = db.query(Invoice).all()
    db.close()

    data = [{
        "client": i.client_name,
        "amount": i.amount,
        "date": i.invoice_date
    } for i in invoices]

    df = pd.DataFrame(data)
    file_path = "invoices.xlsx"
    df.to_excel(file_path, index=False)

    return FileResponse(file_path)



@app.get("/export/pdf")
def export_pdf():
    db = SessionLocal()
    invoices = db.query(Invoice).all()
    db.close()

    data = [["Client", "Amount", "Date"]]

    for i in invoices:
        data.append([i.client_name, i.amount, str(i.invoice_date)])

    file_path = "invoices.pdf"
    pdf = SimpleDocTemplate(file_path)
    table = Table(data)
    pdf.build([table])

    return FileResponse(file_path)

@app.post("/login")
def login(user: UserLogin):
    db = SessionLocal()
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.hashed_password):
        return {"error": "invalid credentials"}

    token = create_token({"user_id": db_user.id})

    return {"access_token": token}




@app.post("/subscribe")
def subscribe():
    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=[{
            "price": "price_xxx",
            "quantity": 1
        }],
        mode="subscription",
        success_url="http://localhost:5173/success",
        cancel_url="http://localhost:5173/cancel",
    )

    return {"url": session.url}


@app.get("/ai/revenue-analysis")
def revenue_analysis():
    db = SessionLocal()

    monthly = db.query(
        func.to_char(Invoice.invoice_date, "YYYY-MM").label("month"),
        func.sum(Invoice.amount).label("total")
    ).group_by("month").order_by("month").all()

    db.close()

    data = [{"month": m[0], "total": float(m[1] or 0)} for m in monthly]

    return data

@app.get("/ai/insight")
def ai_insight():
    data = revenue_analysis()
    return {
        "data": data,
        "insight": analyze_trend(data)
    }

@app.get("/ai/forecast")
def forecast():
    db = SessionLocal()

    results = db.query(
        func.to_char(Invoice.invoice_date, "YYYY-MM").label("month"),
        func.sum(Invoice.amount)
    ).group_by("month").order_by("month").all()

    db.close()

    values = [float(r[1] or 0) for r in results]

    if len(values) < 2:
        return {"forecast": 0}

    growth_rate = (values[-1] - values[-2]) / values[-2] if values[-2] else 0

    predicted = values[-1] * (1 + growth_rate)

    return {
        "current": values[-1],
        "growth_rate": growth_rate,
        "forecast_next_month": round(predicted, 2)
    }


@app.post("/expenses")
def add_expense(expense: ExpenseCreate):
    db = SessionLocal()

    new_expense = Expense(
        category=expense.category,
        amount=expense.amount,
        date=expense.date
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)
    db.close()

    return new_expense

@app.get("/finance/profit-loss")
def profit_loss():
    db = SessionLocal()

    revenue = db.query(func.sum(Invoice.amount)).scalar() or 0
    expenses = db.query(func.sum(Expense.amount)).scalar() or 0

    db.close()

    return {
        "revenue": revenue,
        "expenses": expenses,
        "profit": revenue - expenses
    }