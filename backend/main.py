from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, invoices, expenses, analytics, integrations

app = FastAPI(title="SaaS Revenue Tracker API", version="1.0.0")

# Setup CORS Policies
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Adjust to your production domain eventually
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Organized Routers
app.include_router(auth.router)
app.include_router(invoices.router)
app.include_router(expenses.router)
app.include_router(analytics.router)
app.include_router(integrations.router)

@app.get("/")
def health_check():
    return {"status": "healthy", "service": "revenue-tracker-backend"}