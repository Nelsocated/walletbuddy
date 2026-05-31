FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build && echo "BUILD SUCCESS" && ls -la dist/ || (echo "BUILD FAILED" && exit 1)

EXPOSE 3000

CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && node dist/main.js"]