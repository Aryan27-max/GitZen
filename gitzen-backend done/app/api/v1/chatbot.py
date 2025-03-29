from fastapi import APIRouter, HTTPException
from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.chatbot_service import get_chat_response

router = APIRouter()

@router.post("/ask", response_model=ChatResponse)
async def ask_chatbot(request: ChatRequest):
    try:
        reply = await get_chat_response(request.query)
        return ChatResponse(response=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
