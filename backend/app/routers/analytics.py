from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.database import get_db
from app.models import Invoice, Expense
from app.deps import get_current_user
from app.utils.analytics import analyze_trend

router = APIRouter(prefix="/analytics", tags=["Analytics & Insights"])

@router.get("/stats")
def get_stats(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    # Calculate real stats per user instead of static dummy values
    total_revenue = db.query(func.sum(Invoice.amount)).filter(Invoice.user_id == user_id).scalar() or 0
    invoice_count = db.query(func.count(Invoice.id)).filter(Invoice.user_id == user_id).scalar() or 0
    return {"total_revenue": total_revenue, "invoices": invoice_count}

@router.get("/monthly")
def get_monthly(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    results = db.query(
        func.to_char(Invoice.invoice_date, "YYYY-MM").label("month"),
        func.sum(Invoice.amount)
    ).filter(Invoice.user_id == user_id).group_by("month").order_by("month").all()
    
    return [{"month": r[0], "total": float(r[1] or 0)} for r in results]

@router.get("/yearly")
def get_yearly(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    results = db.query(
        func.to_char(Invoice.invoice_date, "YYYY").label("year"),
        func.sum(Invoice.amount)
    ).filter(Invoice.user_id == user_id).group_by("year").all()
    
    return [{"year": r[0], "total": float(r[1] or 0)} for r in results]

@router.get("/clients/top")
def get_top_clients(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    results = db.query(
        Invoice.client_name,
        func.sum(Invoice.amount).label("total")
    ).filter(Invoice.user_id == user_id)\
     .group_by(Invoice.client_name)\
     .order_by(func.sum(Invoice.amount).desc())\
     .limit(10).all()
    
    return [{"client": r[0], "total": float(r[1] or 0)} for r in results]

@router.get("/insight")
def ai_insight(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    monthly_data = get_monthly(db, user_id)
    return {
        "data": monthly_data,
        "insight": analyze_trend(monthly_data)
    }

@router.get("/forecast")
def forecast(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    results = get_monthly(db, user_id)
    values = [r["total"] for r in results]

    if len(values) < 2:
        return {"forecast_next_month": 0, "growth_rate": 0, "current": values[-1] if values else 0}

    growth_rate = (values[-1] - values[-2]) / values[-2] if values[-2] else 0
    predicted = values[-1] * (1 + growth_rate)

    return {
        "current": values[-1],
        "growth_rate": growth_rate,
        "forecast_next_month": round(predicted, 2)
    }

@router.get("/profit-loss")
def profit_loss(db: Session = Depends(get_db), user_id: int = Depends(get_current_user)):
    revenue = db.query(func.sum(Invoice.amount)).filter(Invoice.user_id == user_id).scalar() or 0
    expenses = db.query(func.sum(Expense.amount)).filter(Expense.user_id == user_id).scalar() or 0
    return {
        "revenue": revenue,
        "expenses": expenses,
        "profit": revenue - expenses
    }