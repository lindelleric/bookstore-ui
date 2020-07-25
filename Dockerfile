FROM node

RUN yarn -v
RUN node -v

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 1234

CMD ["yarn", "start"]