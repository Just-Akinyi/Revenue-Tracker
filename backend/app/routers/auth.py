from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User
from app.schemas import UserLogin, Token
from app.utils.crypto import verify_password
from app.utils.security import create_token

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login", response_model=Token)
def login(user_data: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user_data.email).first()

    if not db_user or not verify_password(user_data.password, db_user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = create_token({"user_id": db_user.id})
    return {"access_token": token, "token_type": "bearer"}