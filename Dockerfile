FROM node:10
WORKDIR /usr/src/app
COPY package.json package*.json ./
RUN npm install
RUN npm run build
COPY . .
CMD ["npm", "start"]