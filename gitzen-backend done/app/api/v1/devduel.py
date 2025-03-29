from fastapi import APIRouter, HTTPException
from app.schemas.devduel import DevDuelRequest, DevDuelResponse, RepoComparison
from app.services.devduel_service import fetch_repo_data, generate_verdict

router = APIRouter()

@router.post("/compare", response_model=DevDuelResponse)
async def compare_repos(request: DevDuelRequest):
    try:
        repo1_data = await fetch_repo_data(request.repo1)
        repo2_data = await fetch_repo_data(request.repo2)
        verdict = await generate_verdict(repo1_data, repo2_data)
        return DevDuelResponse(
            repo1=RepoComparison(**{
                "name": repo1_data["full_name"],
                "stars": repo1_data["stargazers_count"],
                "forks": repo1_data["forks_count"],
                "open_issues": repo1_data["open_issues_count"],
                "watchers": repo1_data["watchers_count"],
                "html_url": repo1_data["html_url"]
            }),
            repo2=RepoComparison(**{
                "name": repo2_data["full_name"],
                "stars": repo2_data["stargazers_count"],
                "forks": repo2_data["forks_count"],
                "open_issues": repo2_data["open_issues_count"],
                "watchers": repo2_data["watchers_count"],
                "html_url": repo2_data["html_url"]
            }),
            verdict=verdict
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
