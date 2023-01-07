# Installing Mysql

1. sudo apt install mysql-server

## connecting to sql server

Verify with

    $ mysqladmin --version

Set password

    $ mysqladmin -u root password "rootpassword"

Connect to sqlserver

    $ mysql

Show all available Databases

    mysql> SHOW DATABASES;

Connect to specific Database

    $ mysql -u root -p

Adding and deleting users to mysql server and give permissions

1. change to mysql database

   $ USE mysql

1. show all tables

   $ SHOW TABLES;

1. show structure of table

   $ SHOW COLUMNS FROM DATABASENAME;

1. add new user to table user(look at list with privileges)

   $ INSERT INTO user (host, user, password, select_priv, insert_priv, update_priv) VALUES ('localhost', 'chris', PASSWORD('password'), 'Y', 'Y', 'Y')

1. check if it worked

   $ SELECT host, user, password FROM user WHERE user = 'uesrname';

1. refresh mysql

   $ FLUSH PRIVILEGES;

1. drop user

   $ DROP USER 'username'@'localhost';

1. connect with user

   $ mysql -u username -p

# create database

    $ CREATE DATABASE `my_database`;

1. connect to database

   $ USE my_database;

## Creating and deleting Tables

1. create table

- connect to mysql server

  $ mysql -u root -p

- create table

  $ CREATE TABLE table_name (column_id INT NOT NULL AUTO_INCREMENT, column_name VARCHAR(100) NOT NULL, establishment_data DATE, PRIMARY KEY (column_id));

## showing structure of tables

    $ SHOW TABLES;

    $ SHOW COLUMNS FROM table_name

    $ DESCRIBE table_name

## inserting data into tables

    $ INSERT INTO table_name (field1, field2, ...fieldN) VALUES (value1, value2, ...valueN);

## retrieve data from tables

    $ SELECT what to select FROM table(s) [WHERE condition that the data must satisfy];

## QUERYS ...to be looked up a lot in memory...

## cloning tables

- mysqldump

  $ mysqldump -u root -p database_name table_name > ~/pathToFile

- import

  $ mysql -u root -p database_name < ~/pathToDumpFile

- mysqlimport data import program

  $ mysqlimport -u root -p --local tmp_db ~/FileLocation
