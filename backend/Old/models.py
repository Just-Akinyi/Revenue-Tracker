from sqlalchemy import Column, Integer, String, Float, Date
from sqlalchemy.orm import declarative_base

Base = declarative_base()

# class Invoice(Base):
#     __tablename__ = "invoices"

#     id = Column(Integer, primary_key=True)
#     client_name = Column(String)
#     amount = Column(Float)
#     invoice_date = Column(Date)

class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)  # 🔥 SaaS ownership
    client_name = Column(String)
    amount = Column(Float)
    invoice_date = Column(Date)

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    hashed_password = Column(String)


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    category = Column(String)
    amount = Column(Float)
    date = Column(Date)