FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/ 
COPY /.env ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build