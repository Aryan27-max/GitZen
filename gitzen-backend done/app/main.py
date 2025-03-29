from fastapi import FastAPI
from app.api.v1 import github, chatbot, devduel, cleancode, snippify
from app.core.config import settings
from app.core.logger import logger

app = FastAPI(
    title=settings.APP_NAME,
    version="1.0.0",
    description="GitZen – AI-powered GitHub Companion"
)

# Registering all API routers
app.include_router(github.router, prefix="/api/v1/github", tags=["GitHub"])
app.include_router(chatbot.router, prefix="/api/v1/chatbot", tags=["Chatbot"])
app.include_router(devduel.router, prefix="/api/v1/devduel", tags=["DevDuel"])
app.include_router(cleancode.router, prefix="/api/v1/cleancode", tags=["CleanCode Coach"])
app.include_router(snippify.router, prefix="/api/v1/snippify", tags=["Snippify"])

@app.get("/")
def root():
    logger.info("Health check pinged.")
    return {"status": "GitZen Backend Running 🚀"}

