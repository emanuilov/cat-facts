FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

# Install only dependencies without devDependencies
RUN npm ci --only=production

# Bundle app source
COPY . .

CMD [ "node", "src/index.js" ]