## Quick and dirty Development Container

### docker-compose file:

```
version: '3.7'
services:
  mongodb_dev:
    image: mongo:latest
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: rootpassword
    ports:
      - 27017:27017
    volumes:
      - mongodb_dev_data_container:/data/db # Bind mount volume

volumes:
  mongodb_dev_data_container:
```

- Latest Version of MongoDB
- root as user and rootpassword as password
- data container mongodb-data-container

### Check if the container is running

    docker ps

### Check data container

    docker volume ls

### From local System Dependencies

mongo command should be installed on computer...
[Install MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

    wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

If we get an error that gnupg is not installed, install gnupg (GNU Privacy Guard)

    sudo apt install gnupg

Create a `/etc/apt/sources.list.d/mongodb-org-.0.list` for current Ubuntu Version.

    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

Update package database

    sudo apt update

Install MongoDB packages

    sudo apt install mongodb-org

### Connect to MongoDB server with mongo Shell

Connect to localhost port 27017

    mongo admin -u root -p rootpassword

### Access Container directly

    docker exec -it containername bash

Quick Commands once loggedinto the MongoShell.

1. Show databases

   show dbs

2. Create new non-existant database

   use newdatabase

3. Show collections

   show collections

4. Show contents/documents of a collection

   db.your_collection_name.find()

5. Save data to a collection

   db.your_collection_name.save({"name":"Test Name"})

6. Show database verson

   db.version()
