from fastapi import FastAPI

app = FastAPI(
    title="EduQuery AI",
    description="AI-powered Academic Information Platform",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to EduQuery AI!",
        "status": "Backend is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }