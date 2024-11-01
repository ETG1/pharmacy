# Base image with Node.js
FROM node:18.8-alpine as base

# Builder stage
FROM base as builder
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy all files and install dependencies
COPY . .

# Install dependencies and build the project
RUN npm install
RUN npm run build

# Runtime stage
FROM base as runtime

# Set environment variables
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy build files from the builder stage
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

# Expose the port the app will run on
EXPOSE 3000

# Start the server
CMD ["node", "dist/server.js"]
