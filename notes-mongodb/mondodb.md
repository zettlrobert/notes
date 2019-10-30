# No-SQL-DB [MongoDB](https://www.mongodb.com/download-center/community)

* Collections list of entrys
 * list of users
 * list of tasks for users

1. Documents(list of entrys in Collection) instead of Row/Record
1. Fields(as many fields as needed per documents) instead of Columns



##[Install mongo db](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
[Install](https://itsfoss.com/install-mongodb-ubuntu/)

### 1. Import Public Key used by Packagemanagement System

    $ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

    $ sudo apt install gnupg

### 2. Create a list file for MongoDB

    $ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

### 3. Reload local pacakge database

    $ sudo apt update

### 4. Install MongoDB packages

    $ sudo apt install mongodb-org

# Data Directory Default-Locaton!

1. Data Directory /var/lib/mongodb
1. Log Directory /var/log/mongodb

By default MongoDB runs using the mongodb user account. If user is changed permissions to data and log directorys MUST be given to this user

# Configuration File
1. /etc/mongodb.conf
Settings such as data directory and log directory take effect updon startup

## My Config on dev Machine
**make sure owner and group are mongodb:mongodb**

    $ sudo chown -R mongodb:mongodb /path/to...

* dbPath: /media/zerodev/databases/mongodb/data
* path: /media/zerodev/databases/mongodb/logs/mongod.log


## Start MongoDB

    $ sudo service mongod start

### Verify Succesfull start

check content of log file (/var/log/mongodb/mongodb.log)

##### Reads:

[initandlisten] waiting for connections on port 27017

27017 is the default port the standalone mongod listens on

### Stop MongoDB

    $ sudo service mongod stop

## Restart MongoDB

    $ sudo service mongod restart

# Begin using MongoDB

    $ mongo


## Visual Tool - Robo 3T -  MongoDB GUI
1. Download .tar.gz
1. moved to database folder
1. install from /bin (./robot3t)


## MongoDB Drivers are needed to interact with DB from different languages
* MongoDB Node.js Driver(https://docs.mongodb.com/ecosystem/drivers/node/)
* [npm mongodb](https://www.npmjs.com/package/mongodb)



## ObjectID
GUID --> Globally unique Identifiers
GUID can be generated before they are inserted in the DB.

4-byte Unix epoch
5-byte randomvalue
3-byte counter, starting with a random value


## basic commands
* insertOne
* insertMany
* findOne
* find --> gibes back "curosr" on which methods can be called
 * toArray()
* updateMany
* updateOne


## mongodb update operators
* $currentDate
* $incmin
* $max
* $mulrename
* $set
* $setOninsert
* $unsert


## Updating Documents

Update with Promises
* updateOne
* updateMany


## Delete Documents
* deleteOne
* deleteMany

Filter, target promise instad of target
provide provide search criteria




## REST API
Representational State Transfer - Application Programming Interface (REST API or RESTful API)

Represntational: Representation of Data, CRUD Operations

State Transfer: Each client request, contains everything needed so the server can process the request






# ODM
Object Document Mapper

## Mongoose
Datamodelling System

## NPM Validator


## [Postman](https://www.getpostman.com/)

1. Environment to provide url for all requests
1. Auth in Collection Edit Authorization Bearer Token...
1. in tests tab get use script to get tokens if auth is needed

# Authentication and Security

## Storing Passwords
Passwords need to be hashed

## Becrypt Algorythm to hash

byryptjs npm module

1. save encrypted password to database
2. on login get string and encrypt
3. if encryption matches login


## Middleware
Middleware pre and post hooks are functions which are passed control during execution of asynchronous functions.


## Authentication with [JWT](https://www.npmjs.com/package/jsonwebtoken)
JSON Web Token for Authentication

jwt is split in three parts

1. JWT and which Algorythmen
1. Payload and Body
1.
