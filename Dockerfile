FROM node:8-alpine AS assets
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "start" ]
