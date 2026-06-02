from app.database import engine, Base
from app.models import User, Invoice, Expense

print("Initializing your production tables...")
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")