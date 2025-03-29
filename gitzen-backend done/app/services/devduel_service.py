import httpx
import openai
from app.core.config import settings
from app.core.logger import logger

BASE_URL = "https://api.github.com"
HEADERS = {
    "Authorization": f"Bearer {settings.GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

async def fetch_repo_data(full_name: str):
    url = f"{BASE_URL}/repos/{full_name}"
    async with httpx.AsyncClient() as client:
        logger.info(f"Fetching GitHub repo: {full_name}")
        response = await client.get(url, headers=HEADERS)
        if response.status_code != 200:
            raise Exception(f"GitHub API error for {full_name}: {response.status_code}")
        return response.json()

async def generate_verdict(repo1_data, repo2_data):
    openai.api_key = settings.OPENAI_API_KEY
    prompt = f"""
Compare these two GitHub repositories and give a verdict on which is better and why:

Repo 1:
- Name: {repo1_data['full_name']}
- Stars: {repo1_data['stargazers_count']}
- Forks: {repo1_data['forks_count']}
- Open Issues: {repo1_data['open_issues_count']}
- Watchers: {repo1_data['watchers_count']}

Repo 2:
- Name: {repo2_data['full_name']}
- Stars: {repo2_data['stargazers_count']}
- Forks: {repo2_data['forks_count']}
- Open Issues: {repo2_data['open_issues_count']}
- Watchers: {repo2_data['watchers_count']}

Verdict:"""
    logger.info("Sending DevDuel prompt to OpenAI...")
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return res["choices"][0]["message"]["content"]
