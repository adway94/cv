# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**CV Digital Profesional** - A modern, responsive digital CV/resume website built as a monolithic FastAPI application serving both static frontend files and API endpoints.

**Tech Stack:**
- **Backend:** FastAPI (Python 3.11) - Serves static files AND provides API endpoints
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+) - No frameworks
- **Deployment:** Docker (single container), Railway-ready
- **Architecture:** Monolithic (FastAPI handles everything)

---

## Architecture

### Monolithic Design
FastAPI serves **both** frontend static files and backend API in a single application:

```
FastAPI (port 8000)
├── Static Files (/, /css/*, /js/*, /assets/*)
│   └── Served via StaticFiles middleware
└── API Endpoints (/api/*)
    ├── /api/health - Health check
    ├── /api/contact - Contact form (TODO: implement email)
    └── /api/stats - Statistics (placeholder)
```

**Why monolithic?**
- Simpler deployment (one container)
- Less resource usage (~100MB RAM vs 150MB+ with Nginx)
- Railway/cloud platform friendly
- Perfect for single-page CV site

### Key Files Structure

```
webcv/
├── main.py              # FastAPI app - SINGLE ENTRY POINT
├── Dockerfile           # Production build
├── requirements.txt     # Python dependencies
│
├── index.html           # Main CV HTML
├── css/
│   ├── variables.css    # Design system (colors, spacing, fonts)
│   ├── components.css   # Reusable components (cards, buttons, etc)
│   └── styles.css       # Main styles + responsive design
├── js/
│   ├── data.js         # ⚠️ EDITABLE CV CONTENT - All personal data here
│   ├── main.js         # Navigation, content population
│   └── animations.js   # Scroll animations, effects
└── assets/
    ├── images/
    │   ├── profile.jpg      # User's photo
    │   └── projects/        # Project screenshots
    └── cv.pdf              # Downloadable CV
```

---

## Development Commands

### Local Development (Docker)

```bash
# Build and run
docker build -t cv-digital .
docker run -d -p 8000:8000 --name cv-digital cv-digital

# View logs
docker logs -f cv-digital

# Stop/restart
docker stop cv-digital
docker restart cv-digital

# Rebuild after changes
docker stop cv-digital && docker rm cv-digital
docker build -t cv-digital .
docker run -d -p 8000:8000 --name cv-digital cv-digital
```

**Access:**
- Frontend (CV): http://localhost:8000
- API Docs (Swagger): http://localhost:8000/docs
- Health Check: http://localhost:8000/api/health

### Local Development (Python - without Docker)

```bash
# Install dependencies
pip install -r requirements.txt

# Run locally
python main.py
# Or with uvicorn:
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Deploy to Railway

```bash
railway login
railway init
railway up
```

Railway auto-detects the Dockerfile and deploys automatically.

---

## Content Management

### Editing CV Content

**All personal data is in `js/data.js`** - This is the ONLY file users need to edit for content changes.

```javascript
const cvData = {
  personal: { name, title, email, phone, ... },
  social: { linkedin, github, twitter, ... },
  experience: [...],      // Work history
  achievements: [...],    // Key accomplishments
  challenges: [...],      // STAR method cases
  projects: [...],        // Portfolio
  skills: {...},          // Frontend, backend, tools
  education: [...],
  certifications: [...],
  languages: [...]
};
```

**Important:** Changes to `data.js` require container rebuild (Docker) or page refresh (local Python).

### Adding Images

- **Profile photo:** `assets/images/profile.jpg`
- **Project screenshots:** `assets/images/projects/*.jpg`
- **Downloadable CV:** `assets/cv.pdf`

---

## Key Design Patterns

### 1. Data Separation
All content is in `js/data.js`, making it easy for non-developers to update their CV without touching HTML/CSS.

### 2. CSS Architecture
- **variables.css:** Design tokens (colors, spacing, typography)
- **components.css:** Reusable components (independent of sections)
- **styles.css:** Section-specific styles + responsive breakpoints

Modify colors/theme: Edit CSS variables in `variables.css` (`:root` section).

### 3. Dynamic Content Population
`main.js` reads `cvData` and populates HTML dynamically via `populateContent()` function. This allows the same HTML structure to work for different users.

### 4. Static File Serving in FastAPI
```python
# main.py lines 70-82
app.mount("/css", StaticFiles(directory="css"), name="css")
app.mount("/js", StaticFiles(directory="js"), name="js")
app.mount("/assets", StaticFiles(directory="assets"), name="assets")

@app.get("/")
async def serve_index():
    return FileResponse("index.html")
```

FastAPI serves frontend files like a traditional web server (Nginx alternative).

---

## CV Sections

The site includes 12 distinct sections (see `index.html`):

1. **Hero** - Name, title, photo, CTA buttons, social links
2. **About** - Professional bio
3. **Experience** - Work history (timeline style)
4. **Achievements** - Quantifiable accomplishments with metrics
5. **Challenges & Solutions** - STAR method case studies (unique feature)
6. **Projects** - Portfolio with images, tags, links
7. **Skills** - Tech skills with animated progress bars
8. **Education** - Academic background
9. **Certifications** - Professional certificates
10. **Languages** - Language proficiency
11. **Contact** - Contact info + social links
12. **Footer** - Copyright, links

**Unique Feature:** "Challenges & Solutions" section showcases problem-solving via STAR method (Situation, Task, Action, Result) - great for interviews.

---

## API Endpoints

### Current Endpoints (main.py)

- `GET /api/health` - Health check (returns status, version)
- `POST /api/contact` - Contact form (⚠️ TODO: implement email sending)
- `GET /api/stats` - CV statistics (⚠️ TODO: implement tracking)

### Future API Extensions (see TODO.md)

When adding database/email features:
1. Uncomment relevant dependencies in `requirements.txt`
2. Add environment variables to `.env` (use `.env.example` as template)
3. Update `main.py` with new endpoints
4. Rebuild Docker image

---

## Environment Variables

See `.env.example` for configuration template. Common variables:

```bash
ENV=production
PORT=8000

# For email functionality (future)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# For database (future)
DATABASE_URL=postgresql://user:pass@localhost:5432/db
```

---

## Deployment Notes

### Railway Deployment
- Railway uses `Dockerfile` automatically
- Set environment variables in Railway dashboard
- Port is automatically assigned (`$PORT`)
- HTTPS and domain management handled by Railway

### Docker Production
- Single container deployment
- Health check built into Dockerfile
- Runs on port 8000 by default
- Change `allow_origins=["*"]` in `main.py` to specific domain in production

### No docker-compose
Project intentionally avoids docker-compose for simplicity. Use plain Docker commands (see Development Commands section).

---

## Future Development (TODO.md)

**Priority order:**
1. **Immediate:** Multi-language support (ES/EN) - High priority
2. **Short-term:** Contact form with email, dark mode
3. **Medium-term:** PDF generation, SEO enhancements
4. **Long-term:** PWA, CMS, blog integration

See `TODO.md` for detailed roadmap and implementation notes.

---

## Common Issues

### Kaspersky/Antivirus Blocking
Kaspersky may intercept localhost requests. Add `http://localhost:8000` to exceptions or disable Web Anti-Virus temporarily.

### Port Already in Use
```bash
# Find and kill process on port 8000
lsof -ti:8000 | xargs kill -9  # macOS/Linux
```

### Images Not Loading
Ensure images exist at correct paths:
- `assets/images/profile.jpg` (not PNG, not in subdirectory)
- Placeholder will show if missing: `https://via.placeholder.com/180`

### Docker Build Fails
Common cause: `.dockerignore` excluding necessary files. Check that `index.html`, `css/`, `js/`, `assets/` are NOT in `.dockerignore`.

---

## Testing

Currently no automated tests. Manual testing checklist:

1. Build Docker image successfully
2. Container runs and passes health check
3. Frontend loads at http://localhost:8000
4. All 12 sections display correctly
5. Navigation smooth scrolls to sections
6. Animations trigger on scroll
7. Mobile responsive (test at 375px, 768px, 1200px)
8. API docs accessible at /docs

---

## Design Philosophy

**Simplicity over complexity:**
- No build tools (Webpack, Vite, etc.)
- No CSS preprocessors (Sass, Less)
- No frontend frameworks (React, Vue)
- Vanilla JS for maximum performance and simplicity
- FastAPI handles everything in one monolithic app

**When this approach is appropriate:**
- Single-page applications
- Personal websites/portfolios
- Prototypes and MVPs
- Projects prioritizing simplicity over scalability

**When to refactor:**
- Need separate frontend/backend deployment
- Expecting 100K+ monthly visitors
- Adding complex backend logic (then: add Nginx reverse proxy)
- Team size grows (then: consider frontend framework)
