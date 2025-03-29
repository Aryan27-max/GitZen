import httpx
from app.core.config import settings
from app.core.logger import logger

BASE_URL = "https://api.github.com"
headers = {
    "Authorization": f"Bearer {settings.GITHUB_TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

async def search_repositories(query: str, sort="stars", order="desc", per_page=10):
    url = f"{BASE_URL}/search/repositories"
    params = {"q": query, "sort": sort, "order": order, "per_page": per_page}
    async with httpx.AsyncClient(timeout=10.0) as client:
        logger.info(f"Searching GitHub for: {query}")
        response = await client.get(url, headers=headers, params=params)
        if response.status_code != 200:
            logger.error(f"GitHub API error: {response.status_code} | {response.text}")
            raise Exception(f"GitHub API error: {response.status_code}")
        return response.json()["items"]
