def analyze_trend(data: list) -> str:
    if len(data) < 2:
        return "Not enough historical data to map a trend."

    last = data[-1]["total"]
    prev = data[-2]["total"]

    change = ((last - prev) / prev) * 100 if prev else 0

    if change < 0:
        return f"Revenue dropped by {abs(change):.1f}%. Possible causes: fewer invoices, lower-paying clients, or seasonal slowdown."
    return f"Revenue increased by {change:.1f}%. Growth trend is healthy."