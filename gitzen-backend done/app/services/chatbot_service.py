import openai
from app.core.config import settings
from app.core.logger import logger
from app.services.github_service import search_repositories

openai.api_key = settings.OPENAI_API_KEY

async def get_chat_response(prompt: str) -> str:
    repos = await search_repositories(prompt)
    repo_list = "\n".join([f"- [{r['full_name']}]({r['html_url']}) ⭐ {r['stargazers_count']}" for r in repos[:5]])
    system_prompt = f"Suggest useful open-source projects for: '{prompt}'. Here are GitHub results:\n{repo_list}"
    logger.info("Sending prompt to OpenAI...")
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "system", "content": "You are an AI that recommends GitHub repositories."},
                  {"role": "user", "content": system_prompt}]
    )
    return response["choices"][0]["message"]["content"]
