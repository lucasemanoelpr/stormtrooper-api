FROM node:14-alpine
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production
RUN npm install -g nodemon && npm install
# Bundle app source
COPY . .
EXPOSE 3000
CMD ["nodemon", "-L", "server/bin/www.js"]