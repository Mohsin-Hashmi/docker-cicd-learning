FROM node:22-alpine

WORKDIR /app    

ENV PORT=8000
ARG APP_VERSION=local
ENV APP_VERSION=$APP_VERSION

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["npm", "start"]
