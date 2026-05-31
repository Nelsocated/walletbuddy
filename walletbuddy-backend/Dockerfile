FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build || (echo "BUILD FAILED" && cat tsconfig.build.json && exit 1)

EXPOSE 3000

CMD ["node", "dist/main.js"]