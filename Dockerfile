FROM node:10
WORKDIR /usr/src/app
COPY package.json package*.json tsconfig.json src ./
RUN npm install
RUN npm run build
CMD ["npm", "start"]
