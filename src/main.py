from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import StreamingResponse
from PIL import Image, ImageOps
import requests
import io
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/posts")
async def get_posts():
    try:
        response = requests.get("https://jsonplaceholder.typicode.com/posts")
        response.raise_for_status()
        posts = response.json()
        return posts
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail="Error fetching posts") from e

@app.post("/invert-image")
async def invert_image(file: UploadFile = File(...)):
    try:
        image = Image.open(file.file)

        inverted_image = ImageOps.invert(image.convert("RGB"))

        img_byte_arr = io.BytesIO()
        inverted_image.save(img_byte_arr, format="PNG")
        img_byte_arr.seek(0)

        return StreamingResponse(img_byte_arr, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=400, detail="Error processing image") from e
