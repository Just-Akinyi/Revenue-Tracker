from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, invoices, expenses, analytics, integrations

# app = FastAPI(title="SaaS Revenue Tracker API",  description="API documentation for my portfolio project", version="1.0.0")
app = FastAPI(
    title="SaaS Revenue Tracking API",
    description=(
        "A secure, high-performance REST API designed to track SaaS metrics and MRR subscription analytics. "
        "Built with **Python**, **FastAPI**, and **PostgreSQL**, featuring secure authentication and robust query performance."
    ),
    version="1.0.0",
    docs_url="/docs", 
)
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
def home():
    return {"status": "healthy", "service": "revenue-tracker-backend"}


if __name__ == "__main__":
    # Read the PORT variable provided by the cloud host, defaulting to 8000 locally
    port = int(os.environ.get("PORT", 8000))
    # Bind to 0.0.0.0 so the container can accept external web traffic
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)