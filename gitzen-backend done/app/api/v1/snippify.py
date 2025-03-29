from fastapi import APIRouter, HTTPException
from app.schemas.snippify import SnippifyRequest, SnippifyResponse
from app.services.snippify_service import generate_snippets

router = APIRouter()

@router.post("/generate", response_model=SnippifyResponse)
async def generate_snippets_endpoint(request: SnippifyRequest):
    try:
        snippets = await generate_snippets(request.language, request.code)
        return SnippifyResponse(snippets=snippets)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
