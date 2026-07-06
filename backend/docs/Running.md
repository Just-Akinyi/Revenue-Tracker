Run Both

Terminal 1:

cd frontend
npm run dev

Terminal 2:

cd backend
source venv/bin/activate
uvicorn main:app --reload

You now have:

React (Vite)
http://localhost:5173

FastAPI
http://localhost:8000