FROM node:10-alpine

LABEL maintainer="pangxiaoxi@gmail.com"
LABEL description="image to learn react"

ARG DEV_HOME

ENV PROJECT_DIR $DEV_HOME/try-redux

WORKDIR $PROJECT_DIR

CMD npm install --quiet &&\
    npm start