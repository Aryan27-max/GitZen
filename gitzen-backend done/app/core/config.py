from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    GITHUB_TOKEN: str
    OPENAI_API_KEY: str
    APP_NAME: str = "GitZen Backend"

    class Config:
        env_file = ".env"

settings = Settings()
