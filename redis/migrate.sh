#!/bin/bash
source .env

docker build $(pwd) -t pieno_redis_up
docker run \
    -w /code \
    --env-file .env \
    --network "$NETWORK" \
    pieno_redis_up 