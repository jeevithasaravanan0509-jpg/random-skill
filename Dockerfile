# Stage 1: Build the React application
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency files first for better Docker caching
COPY package*.json ./

RUN npm ci

# Copy the application source
COPY . .

# Build the production application
RUN npm run build


# Stage 2: Serve the production application
FROM nginx:alpine

# Copy the built Vite application into Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the web server port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]