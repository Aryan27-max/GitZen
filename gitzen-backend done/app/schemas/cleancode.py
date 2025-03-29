from pydantic import BaseModel

class CodeReviewRequest(BaseModel):
    language: str
    code: str

class CodeReviewResponse(BaseModel):
    feedback: str
