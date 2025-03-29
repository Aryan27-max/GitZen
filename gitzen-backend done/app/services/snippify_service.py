import openai
from app.core.config import settings
from app.core.logger import logger

openai.api_key = settings.OPENAI_API_KEY

async def generate_snippets(language: str, code: str) -> str:
    prompt = f"Break the following {language} code into reusable snippets and explain each in comments:\n\n{code}"
    logger.info("Sending Snippify prompt to OpenAI...")
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return res["choices"][0]["message"]["content"]
