from fastapi import FastAPI
from routes import auth, users, projects

app = FastAPI()

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(projects.router, prefix="/projects", tags=["Projects"])

@app.get("/")
def root():
    return {"message": "Welcome to DevConnect API!"}
