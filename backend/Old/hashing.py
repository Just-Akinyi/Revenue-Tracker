from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
    return pwd_context.hash(password)

def verify_password(plain, hashed):
    return pwd_context.verify(plain, hashed)

def get_current_user(token: str):
	payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
	return payload["user_id"]

def analyze_trend(data):
    if len(data) < 2:
        return "Not enough data"

    last = data[-1]["total"]
    prev = data[-2]["total"]

    change = ((last - prev) / prev) * 100 if prev else 0

    if change < 0:
        return f"Revenue dropped by {abs(change):.1f}%. Possible causes: fewer invoices, lower-paying clients, or seasonal slowdown."
    else:
        return f"Revenue increased by {change:.1f}%. Growth trend is healthy."