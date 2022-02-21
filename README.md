# Example REST API for the teamwork

This repository contains an Express application implementing a very simple REST API for a book store. It is used to illustrate the following key technologies:

 - REST API.
 - Express and its middlewares.
 - Testing with Mocha.
 - JWT (_Json Web Token_).
 - Using Sequelize to access a database.
 - Running tasks in the background.
 
# Repository organization

The repository is organized in several directories:

 - `/app`: contains the code of the express application.
 
    - `app/config`: contains the configuration files.
    - `app/routes`: contains the API endpoints exposed by the server.
    - `app/middlewares/validators`: contains the validators for the API endpoints.
    - `app/controllers`: contains the controllers for the API endpoints.
    - `app/models`: contains the data models.
	- `app/media`: contains code to deal with media files.

 - `/test`: contains the code of the tests.
