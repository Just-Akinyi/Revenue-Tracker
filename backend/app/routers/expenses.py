from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Expense
from app.schemas import ExpenseCreate, ExpenseResponse
from app.deps import get_current_user

router = APIRouter(prefix="/expenses", tags=["Expenses"])

@router.post("", response_model=ExpenseResponse)
def add_expense(expense: ExpenseCreate, db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    new_expense = Expense(
        user_id=user_id,
        category=expense.category,
        amount=expense.amount,
        date=expense.date
    )
    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)
    return new_expense