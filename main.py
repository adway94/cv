"""
FastAPI Backend - CV Digital
Monolithic application serving static files and API endpoints
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
from starlette.middleware.base import BaseHTTPMiddleware

# Initialize FastAPI app
app = FastAPI(
    title="CV Digital API",
    description="Backend API for digital CV website",
    version="1.0.0",
    docs_url=None,  # Desactiva /docs
    redoc_url=None  # Desactiva /redoc
)

# No-Cache Middleware for development
class NoCacheMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response = await call_next(request)
        # Only apply no-cache to JS and CSS files
        if request.url.path.endswith(('.js', '.css')):
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
            response.headers["Pragma"] = "no-cache"
            response.headers["Expires"] = "0"
        return response

# Add middlewares
app.add_middleware(NoCacheMiddleware)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica tu dominio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# Models
# ============================================

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


# ============================================
# API Routes
# ============================================

@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "ok",
        "message": "API is running",
        "version": "1.0.0"
    }


@app.post("/api/contact")
async def send_contact_email(form: ContactForm):
    """
    Contact form endpoint
    TODO: Implement email sending (SMTP, SendGrid, etc.)
    """
    try:
        # TODO: Implementar envío de email
        # Por ahora solo log
        print(f"📧 Contact form received:")
        print(f"   Name: {form.name}")
        print(f"   Email: {form.email}")
        print(f"   Subject: {form.subject}")
        print(f"   Message: {form.message}")

        # Aquí irá la lógica de envío de email
        # Ejemplo con SMTP, SendGrid, etc.

        return {
            "status": "success",
            "message": "Mensaje enviado correctamente"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/stats")
async def get_stats():
    """
    Get CV statistics
    TODO: Implement DB queries if needed
    """
    return {
        "visits": 0,
        "downloads": 0,
        "messages": 0
    }


# ============================================
# Static Files & Frontend
# ============================================

# Mount static files (CSS, JS, images)
app.mount("/css", StaticFiles(directory="css"), name="css")
app.mount("/js", StaticFiles(directory="js"), name="js")
app.mount("/assets", StaticFiles(directory="assets"), name="assets")


@app.get("/")
async def serve_index():
    """Serve index.html"""
    return FileResponse("index.html")


@app.get("/{file_path:path}")
async def serve_static_files(file_path: str):
    """
    Catch-all route for other files
    Returns index.html for SPA routing or 404
    """
    file_location = file_path

    # Check if file exists
    if os.path.exists(file_location):
        return FileResponse(file_location)

    # For SPA routing, return index.html
    if not file_path.startswith("api/"):
        return FileResponse("index.html")

    raise HTTPException(status_code=404, detail="File not found")


# ============================================
# Startup Event
# ============================================

@app.on_event("startup")
async def startup_event():
    """Run on application startup"""
    port = os.getenv("PORT", "8000")
    host = os.getenv("HOST", "0.0.0.0")

    # Mostrar URL accesible
    display_host = "localhost" if host == "0.0.0.0" else host

    print("=" * 50)
    print("🚀 CV Digital Backend Started")
    print("=" * 50)
    print(f"🌐 Frontend: http://{display_host}:{port}")
    print("=" * 50)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True  # Solo para desarrollo
    )
