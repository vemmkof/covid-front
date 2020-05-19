#!/bin/bash
APP_NAME="covid-app"
APP_PORT=90
docker rmi $(docker images | grep $APP_NAME) || true && \
docker build -t $APP_NAME . && \
docker run -d -p $APP_PORT:80 $APP_NAME