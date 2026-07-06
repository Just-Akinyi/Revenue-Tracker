from fastapi import APIRouter, Depends
import stripe
from app.config import settings
from app.deps import get_current_user

stripe.api_key = settings.STRIPE_API_KEY
router = APIRouter(prefix="/integrations", tags=["Third-party Integrations"])

@router.post("/subscribe")
def subscribe(user_id: int = Depends(get_current_user)):
    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=[{
            "price": "price_xxx",  # Match your real Stripe dashboard price ID
            "quantity": 1
        }],
        mode="subscription",
        success_url="http://localhost:5173/success",
        cancel_url="http://localhost:5173/cancel",
        client_reference_id=str(user_id) # Ties checkout back to your user account
    )
    return {"url": session.url}