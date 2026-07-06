Create Database
sudo -u postgres psql

Inside PostgreSQL:

CREATE DATABASE revenue_tracker;
CREATE USER revenue_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE revenue_tracker TO revenue_user;

Exit:

\q

---
Install Database Packages
pip install sqlalchemy psycopg2-binary
Database Connection

backend/database.py

Invoice Model

backend/models.py
Create Tables

backend/init_db.py

Run:

python init_db.py

GRANT PERMISSIONS IF NEEDED

Verify
sudo -u postgres psql revenue_tracker
\dt

You should see:

- table name