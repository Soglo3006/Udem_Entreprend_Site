from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Benevole(BaseModel):
    firstname: str
    lastname: str
    email: str
    programme: Optional[str] = None
    message: Optional[str] = None
    
@app.post("/benevole")
async def recevoir_benevole(data: Benevole):
    benevole_dict = data.dict()
    try:
        with open("benevoles.json", "r", encoding="utf-8") as f:
            liste = json.load(f)
    except FileNotFoundError:
        liste = []

    liste.append(benevole_dict)

    with open("benevoles.json", "w", encoding="utf-8") as f:
        json.dump(liste, f, indent=2, ensure_ascii=False)
    
    return {"message": "Données reçues avec succès !"}