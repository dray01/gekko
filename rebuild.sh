#!/bin/bash

#Stop docker 
docker-compose down

# Rebuild options
#docker-compose build -- no-cache
docker-compose build

# Start Docker
HOST=localhost PORT=3001 docker-compose up -d
