from pydantic import BaseModel

class SnippifyRequest(BaseModel):
    code: str
    language: str

class SnippifyResponse(BaseModel):
    snippets: str
