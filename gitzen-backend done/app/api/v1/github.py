from fastapi import APIRouter, Query
from typing import List
from app.schemas.github import Repo
from app.services.github_service import search_repositories

router = APIRouter()

@router.get("/search", response_model=List[Repo])
async def search_repos(q: str):
    repos = await search_repositories(q)
    return repos
