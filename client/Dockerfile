# syntax=docker/dockerfile:1

FROM node:21-alpine as builder

WORKDIR /web

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm ci

COPY . .

# Expose the port
EXPOSE 3000

# Serve the application
CMD ["npm", "start"] 
