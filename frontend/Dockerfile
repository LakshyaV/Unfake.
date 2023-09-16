FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install -g npm@10.1.0
RUN npm i --force

EXPOSE 3000

CMD [ "npm", "start"]