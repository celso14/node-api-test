FROM node:16.17-alpine

RUN npm install -g npm@8.15.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deeps

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev"]