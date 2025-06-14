FROM node:20-alpine

WORKDIR /app

COPY . .

# ติดตั้ง axios และ types ก่อน build
RUN npm install
RUN npm install axios @types/axios --save && npm run build

RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]