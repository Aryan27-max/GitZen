import openai
from app.core.config import settings
from app.core.logger import logger

openai.api_key = settings.OPENAI_API_KEY

async def review_code(language: str, code: str) -> str:
    prompt = f"Review the following {language} code. Suggest improvements for readability, best practices, and maintainability:\n\n{code}"
    logger.info("Sending code review prompt to OpenAI...")
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return res["choices"][0]["message"]["content"]
