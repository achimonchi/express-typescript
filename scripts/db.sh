#!/bin/bash

docker run -d --name mysql \
    -p 3306:3306 \
    --restart always \
    -v $PWD/db:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_DATABASE=tsExpress \
    mysql