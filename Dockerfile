FROM node:22-alpine AS builder
WORKDIR /opt/app

# Vite bakes env vars into the bundle at build time.
# If not passed with --build-arg, the value from .env is used.
ARG VITE_API_URL

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Unprivileged nginx: Rahti (OpenShift) runs containers as a random non-root user,
# so the server must listen on a port above 1024 and not need root.
FROM nginxinc/nginx-unprivileged:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
