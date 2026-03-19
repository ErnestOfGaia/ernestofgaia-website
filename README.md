# ernestofgaia.xyz — AI Coaching Website

React + TypeScript + Vite SPA. Deployed as a static site via Docker Compose on a Hostinger VPS.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Serving:** nginx:alpine (no Node in production)
- **Deployment:** Docker Compose on Ubuntu 24.04 VPS

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
```

---

## How to Build & Deploy

### 1. Build locally

```bash
npm install
npm run build
```

This produces a `dist/` folder. Copy its **contents** (not the folder itself) into `site/`:

```bash
# Mac/Linux
rsync -av --delete dist/ site/

# Windows (PowerShell)
robocopy dist site /MIR
```

### 2. Upload to VPS

```bash
scp -r site/ docker-compose.yml nginx.conf user@<VPS-IP>:~/ernestofgaia/
```

### 3. Start the container

```bash
ssh user@<VPS-IP>
cd ernestofgaia
docker compose up -d
```

The site will be live at `http://<VPS-IP>:8080`.

---

## Ports

| Port (host) | Port (container) | Description          |
|-------------|-----------------|----------------------|
| 8080        | 80              | nginx serving site   |

---

## Health Check

```
GET http://<VPS-IP>:8080/health
→ HTTP 200  "ok"
```

---

## Environment Variables

This project has no runtime environment variables — it is a fully static site.
Any build-time env vars (e.g. `VITE_*`) are baked into the bundle at build time.

---

## Required Assets

Place these files before building:

| Path | Description |
|------|-------------|
| `public/slide1.png` | Carousel image 1 |
| `public/slide2.png` | Carousel image 2 |
| `public/slide3.png` | Carousel image 3 |
| `src/assets/background.png` | Hero background |

---

## Alternative: Multi-Stage Docker Build

If you want Docker to build everything (useful for CI/CD):

1. Edit `docker-compose.yml` — replace `image: nginx:alpine` with:
   ```yaml
   build:
     context: .
     dockerfile: Dockerfile
   ```
2. Run: `docker compose up -d --build`

No need to run `npm run build` locally or manage the `site/` folder.

---

## Updating the Site

```bash
# Rebuild locally
npm run build
rsync -av --delete dist/ site/

# Re-deploy
scp -r site/ user@<VPS-IP>:~/ernestofgaia/
ssh user@<VPS-IP> "cd ernestofgaia && docker compose up -d"
```

---

## Domain & TLS

TLS is terminated at the host Nginx reverse proxy.
The container stays HTTP internally on port 8080.
See `DEPLOYMENT_STANDARDS.md` (in the `websites/` parent folder) for the host Nginx config.
