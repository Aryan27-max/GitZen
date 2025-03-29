from pydantic import BaseModel

class DevDuelRequest(BaseModel):
    repo1: str
    repo2: str

class RepoComparison(BaseModel):
    name: str
    stars: int
    forks: int
    open_issues: int
    watchers: int
    html_url: str

class DevDuelResponse(BaseModel):
    repo1: RepoComparison
    repo2: RepoComparison
    verdict: str
