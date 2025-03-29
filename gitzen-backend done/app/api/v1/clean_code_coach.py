from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import subprocess
import tempfile

router = APIRouter()

class CodeInput(BaseModel):
    code: str

@router.post("/lint")
def check_clean_code(data: CodeInput):
    try:
        with tempfile.NamedTemporaryFile(suffix=".py", delete=False, mode="w") as tmp:
            tmp.write(data.code)
            tmp.flush()
            result = subprocess.run(
                ["pylint", tmp.name, "--disable=all", "--enable=C,R,W,E"],
                capture_output=True,
                text=True
            )
            return {"report": result.stdout}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
