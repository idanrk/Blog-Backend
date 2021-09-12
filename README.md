# Blog API - Docker,Node,Redis,Mongo
*  Created Docker image for the Node app. The app to connected to Redis and MongoDB containers
*  The Node-app creates sessions on Redis container, and saves data on MongoDB container
*  Created CRUD methods for User and Post models.
*  Modules used: express,redis,mongoose,express-session,bcrypt.js,nodemon and more.
*  Running the development-docker yml: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`
*  Running the production-docker yml: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`
*  Make sure to add ENV Variables at the config directory:
# Full documentation can be found on: https://documenter.getpostman.com/view/16998201/U16gR87B
