from pydantic import BaseModel

class InvoiceCreate(BaseModel):
    client_name: str
    amount: float
    invoice_date: str