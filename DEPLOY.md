# Ernest Of Gaia — VPS Deployment Guide

## Prerequisites

Make sure your VPS has:
- **Node.js** `v20.19+` or `v22.12+` (required by Vite 8)
  ```bash
  node -v   # check version
  ```
  If you need to upgrade, use [nvm](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 22
  nvm use 22
  ```
- **nginx** installed
- Your domain's DNS pointing to the VPS IP

---

## Required Assets (create these before deploying)

Place these files in the `public/` folder of the project:

| File | Description |
|------|-------------|
| `public/slide1.png` | First carousel image |
| `public/slide2.png` | Second carousel image |
| `public/slide3.png` | Third carousel image |

And place your background image at:
```
src/assets/background.png
```

---

## Build & Deploy Steps

### 1. On your local machine — build the project
```bash
npm install
npm run build
```
This produces a `dist/` folder with all static files.

### 2. Upload to VPS
```bash
# Create the web root on the VPS
ssh user@yourserver "mkdir -p /var/www/ernestofgaia"

# Copy the built dist folder
scp -r dist/ user@yourserver:/var/www/ernestofgaia/
```

### 3. Set up nginx
```bash
# Copy the nginx config
scp ernestofgaia.nginx.conf user@yourserver:/etc/nginx/sites-available/ernestofgaia

# SSH in and enable the site
ssh user@yourserver
sudo ln -s /etc/nginx/sites-available/ernestofgaia /etc/nginx/sites-enabled/
sudo nginx -t          # test config
sudo systemctl reload nginx
```

### 4. SSL with Let's Encrypt (recommended)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
After certbot runs, uncomment the HTTPS block in `ernestofgaia.nginx.conf`.

---

## Updating the Site

When you make changes locally:
```bash
npm run build
scp -r dist/ user@yourserver:/var/www/ernestofgaia/
```
No nginx restart needed — it serves static files directly.

---

## Node Version Check

Vite 8 requires Node `^20.19.0` or `>=22.12.0`. Running an older version will cause the build to fail.
