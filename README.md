💰 AI-powered QuickBooks + Stripe analytics for freelancers & small businesses
# Revenue Tracker

A modern revenue and invoice analytics platform built with **React**, **FastAPI**, and **PostgreSQL**.

Revenue Tracker helps freelancers, consultants, agencies, tutors, contractors, and small businesses understand their financial performance by transforming invoices into actionable insights.

---
# 🤖 1. AI FINANCIAL ADVISOR (“why revenue dropped”)
## 🧠 What it does

It compares:

- this month revenue
- last month revenue
- detects drop
- explains WHY using patterns (clients, volume, timing)

## Features

### Invoice Management
- Create invoices
- Upload historical invoices
- Edit invoice records
- Delete invoice records
- Search invoices
- Filter by date range

### Revenue Analytics
- Total revenue
- Monthly revenue
- Yearly revenue
- Average monthly revenue
- Best-performing month
- Worst-performing month

### Growth Tracking
- Month-over-month growth
- Year-over-year growth
- Revenue trends
- Performance charts

### Client Insights
- Top clients by revenue
- Revenue per client
- Client contribution percentages
- Client history

### Goal Tracking
- Set annual revenue goals
- Set monthly revenue goals
- Progress indicators
- Goal completion percentages

### Forecasting
- Revenue projections
- Year-end estimates
- Performance forecasting based on historical data

### Dashboard
- Revenue summary cards
- Interactive charts
- Invoice tables
- Trend visualization

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Recharts

### Backend
- FastAPI
- SQLAlchemy
- Pydantic

### Database
- PostgreSQL

---

## Example Use Cases

### Freelancers
Track earnings from multiple clients and monitor monthly growth.

### Coding Teachers
Monitor student payments and teaching income trends.

### Agencies
Track project revenue and identify top-paying clients.

### Consultants
Measure performance across different contracts and clients.

### Small Businesses
Understand business growth and forecast future revenue.

---

## Example Dashboard Metrics

| Metric | Example |
|----------|----------|
| Total Revenue | KES 1,250,000 |
| Revenue This Month | KES 95,000 |
| Annual Goal | KES 2,000,000 |
| Goal Completion | 62.5% |
| Best Month | March 2026 |
| Top Client | ABC Company |

---

## Project Structure

```text
revenue-tracker/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── charts/
│
├── backend/
│   ├── routers/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── database/
│
└── docs/
```

---

## Future Features

- PDF invoice upload
- Automatic invoice data extraction
- CSV imports
- Email reports
- Multi-user accounts
- Mobile application
- AI-powered business insights
- Expense tracking
- Profit and loss analysis

---

## License

MIT License

---

## Author

**Justin Akinyi**

GitHub: **just-akinyi**

Email: **justakinyi1@gmail.com**

---

## Vision

Revenue Tracker aims to help individuals and businesses answer one important question:

> "Am I making progress?"

By converting invoices into meaningful analytics, users can make informed decisions, track growth, and achieve their financial goals.
backend/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── deps.py
│   ├── utils/
│   │   ├── crypto.py
│   │   ├── security.py
│   │   └── analytics.py
│   └── routers/
│       ├── auth.py
│       ├── invoices.py
│       ├── expenses.py
│       ├── analytics.py
│       └── integrations.py
├── init_db.py
├── main.py
└── requirements.txt


---
To run your production-ready FastAPI backend, follow these quick steps:
1. Install Dependencies

Ensure you have your environment active and install the required packages:
Bash

pip install fastapi uvicorn sqlalchemy psycopg2-binary passlib python-jose[cryptography] pydantic email-validator pandas openpyxl pdfplumber openai reportlab stripe

2. Initialize the Database

Run the setup script to create your PostgreSQL tables:
Bash

python init_db.py

3. Launch the Server

Start the development server using Uvicorn:
Bash

uvicorn main:app --reload

    API Documentation: Open your browser and navigate to http://127.0.0.1:8000/docs to test your endpoints interactively.

    Base URL: Your frontend should point to http://127.0.0.1:8000.
