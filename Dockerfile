FROM node:18

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install
# hello
EXPOSE 3000
CMD ["node", "index.js"]