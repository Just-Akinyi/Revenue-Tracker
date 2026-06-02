from jose import jwt
from datetime import datetime, timedelta
from app.config import settings

def create_token(data: dict) -> str:
    payload = data.copy()
    expire = datetime.utcnow() + timedelta(days=7)
    payload.update({"exp": expire})
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)