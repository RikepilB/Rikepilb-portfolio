# 1) Build React app
FROM node:18-alpine AS builder
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm ci

# copy source & build
COPY . .
RUN npm run build

# 2) Serve with nginx
FROM nginx:stable-alpine
# remove default site, copy ours
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# expose port and start
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
