# Build static site (pass Cal link at build time — Vite inlines VITE_* at build)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
ARG VITE_CAL_LINK
ENV VITE_CAL_LINK=$VITE_CAL_LINK
RUN npm run build

# Serve with nginx
FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
