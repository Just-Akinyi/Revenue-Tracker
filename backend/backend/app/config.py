import os

class Settings:
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://revenue_user:password123@localhost/revenue_tracker")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecret_change_me_in_production")
    ALGORITHM: str = "HS256"
    STRIPE_API_KEY: str = os.getenv("STRIPE_API_KEY", "")

settings = Settings()