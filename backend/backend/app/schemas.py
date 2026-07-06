from pydantic import BaseModel, EmailStr
from datetime import date
from typing import List, Optional

# Auth Schemas
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

# Invoice Schemas
class InvoiceCreate(BaseModel):
    client_name: str
    amount: float
    invoice_date: date  # Pydantic safely converts ISO strings to date objects

class InvoiceResponse(InvoiceCreate):
    id: int
    user_id: int

    class Config:
        from_attributes = True

# Expense Schemas
class ExpenseCreate(BaseModel):
    category: str
    amount: float
    date: date

class ExpenseResponse(ExpenseCreate):
    id: int
    user_id: int

    class Config:
        from_attributes = True