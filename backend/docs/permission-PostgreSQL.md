 1: Open the PostgreSQL CLI as adminbashsudo -u postgres psql -d revenue_tracker

Use code with caution.

Step 2: Grant PermissionsPaste these three commands into the prompt and press Enter:sql-- 
-- 1. Give ownership of the schema to your user

ALTER SCHEMA public OWNER TO revenue_user;

-- 2. Ensure the user can access and modify the schema

GRANT USAGE, CREATE ON SCHEMA public TO revenue_user;

-- 3. Grant rights to all future tables created in this schema

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO revenue_user;

Use code with caution.

Type \q and press Enter to exit the PostgreSQL shell.


Step 3: Rerun Your ScriptNow that the permissions are active, execute your database initialization script again
```
python init_db.py
```
Use code with caution.You should now see the successful output without errors:

Tables created