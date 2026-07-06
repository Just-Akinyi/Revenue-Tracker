# Step 1
Backend (FastAPI)

Create backend folder:

mkdir backend
cd backend

Create virtual environment:

python3 -m venv venv
source venv/bin/activate

Install FastAPI:

pip install fastapi uvicorn sqlalchemy psycopg2-binary python-dotenv

> Create main.py

Run server:

uvicorn main:app --reload

Backend URL:

http://localhost:8000

Swagger Docs:

http://localhost:8000/docs