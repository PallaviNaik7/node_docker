# choosing to use the Alpine variant of NodeJS-LTS to reduce image size.
# Service was built in nodejs v12.18.3
FROM node:12-alpine

# creating a special directory for the code. Now `/app` is current working directory.
WORKDIR /app

# Copying the package.json file to help initialise the node_modules.
# Now installing the required node_modules.
COPY ./package.json ./
RUN npm install

# Below includes the steps to run and maintain the server.
# copying the codebase into the current work directory.
COPY . .

# Exposing the TCP/UDP port the service is listening at.
EXPOSE 3000

# Running the server.
CMD ["node", "app.js"]