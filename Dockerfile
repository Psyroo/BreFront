FROM node:18-alpine as build
WORKDIR /app
COPY kouign-amap/package*.json ./
RUN npm install
COPY kouign-amap/ ./
RUN npm run build

# Servir l'application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
