### Introduction
Just a basic cliche` notes app. This server is written in nodeJS. 
The following utilities/frameworks/tools have been used:

*Express*
Express lets us create the server, run it, and expose the ports necessary for internal API routing

*Pg and p-hstore*
These are simple tools to facilitate connecting to a postgres database

*Sequelize and sequelize-cli*
ORM for interfacing with said postgres database. Makes querying easier

*faker*
A library that lets us generate tons of fake data. Used along with sequelize to seed the db for testing

*nodemon*
Keeps the server up and running. Tracks the changes made and as long as its running, the service gets updated automatically. 

*multer*
Package that lets us parse multipart requests. basically allows the endpoints to accept files like pictures aside from other data types