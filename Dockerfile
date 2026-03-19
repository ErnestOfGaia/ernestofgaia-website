# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Copy lockfile and package.json first for better layer caching
COPY package.json package-lock.json ./

# Use npm install instead of npm ci so a missing/mismatched lockfile never breaks the build
RUN npm install

# Copy the rest of the source
COPY . .

# Build the production bundle
RUN npm run build

# ─── Stage 2: Serve ───────────────────────────────────────────────────────────
FROM nginx:alpine AS production

# Remove the default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
