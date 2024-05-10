# Step 1: Use an official Node.js LTS image as a parent image
FROM node:16 as build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Install dependencies
# Copy both package.json AND package-lock.json or yarn.lock (if available)
COPY package*.json ./
# If using yarn, uncomment the next line and comment out `npm install`
# RUN yarn install
RUN npm install

# Step 4: Copy the source code into the container
COPY . .

# Step 5: Build the application for production
RUN npm run build

# Expose port 5000 to access the container
EXPOSE 5000
