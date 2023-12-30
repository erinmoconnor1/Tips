# Step 1: Use an official Node runtime as a parent image
FROM node:18

# Step 2: Set the working directory in the container to /app
WORKDIR /app

COPY . .
# Step 3: Copy the package.json files from your project into the container
COPY package*.json ./

# Step 4: Install any needed packages specified in package.json
RUN npm install

# Step 5: Install PM2 globally
RUN npm install pm2 -g

# Step 6: Bundle your app's source code inside the Docker image
COPY . /app

# Step 7: Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Step 8: Define the command to run your app using CMD which defines your runtime
# Replace "npm start" with the PM2 command to start your app
CMD ["sudo", "pm2-runtime", "start", "npm", "--", "start"]
