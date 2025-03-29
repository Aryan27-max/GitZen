from fastapi import APIRouter, HTTPException
from app.schemas.cleancode import CodeReviewRequest, CodeReviewResponse
from app.services.cleancode_service import review_code

router = APIRouter()

@router.post("/review", response_model=CodeReviewResponse)
async def review_code_endpoint(request: CodeReviewRequest):
    try:
        feedback = await review_code(request.language, request.code)
        return CodeReviewResponse(feedback=feedback)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
