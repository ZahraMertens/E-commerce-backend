# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Contributor](https://img.shields.io/badge/Contributor-1-green.svg) ![Sql](https://img.shields.io/badge/Npm-MySql-red.svg) ![sequelize](https://img.shields.io/badge/Npm-sequelize-red.svg) ![express](https://img.shields.io/badge/Npm-expressJs-red.svg)


## General Information
 
* [Walkthrough Video E-Commerce Backend Application]()

* [GitHub repository of E-Commerce Backend Application](https://github.com/ZahraMertens/E-commerce-backend.git)


## Table of Contents
1. [General Information](#general-information)
2. [Task Description](#task-description)
3. [Installation Instructions](#installation-instructions)
5. [Technologies Used](#technologies-used)
6. [User Story](#user-story)
7. [Actual Behaviour](#actual-behaviour)
8. [Mock-Up](#mock-up)
9. [Credits](#credits)


## Task Description

The Application "E-commerce-Backend" is the backend part powered by express.js and sequelize to interact with the retailers database. The task is made to understand the fundamental architecture of e-commerce platforms in order to become a full stack web developer. The application allows the user to perform different request on the database to get categories, products and its product tags as well as update, and delete data from the database. As the application represents only the backend of the retailers webpage we can use the code with Insomnia in order to perform the previously named methods.

## Installation Instructions

* 1️⃣ First the user must clone the [GitHub Repo](https://github.com/ZahraMertens/E-commerce-backend.git) on its computer.

* 2️⃣ Open the repository on your device with VS Code (or any other program)

* 3️⃣ Open the command line at the folder location OR the integrated terminal 

* 4️⃣ First, you MUST install the npm packages by running "npm install" in the terminal

* 5️⃣ You also have to install MySql and create an account in order to be able to interact with the database

   * You then need to login to mysql on the command line by running the 'mqsql -u root -p' command and run SOURCE schema.sql and SOURCE seeds.sql to initialize the database

* 6️⃣ In order to be able to interact with the database out of mysql, the user must install the npm package "sequelize" to build a connection between the database and the server

* 7️⃣ The user must also download Insomnia or postman to be able to perform the request without the frontend

* 8️⃣ To protect your personal data you need to create a ".env" file in the root of the repository, which includes your mysql password, the database name, and the user such as:  ![env-Demo](./Assets/Readme/env_demo.png)

* 9️⃣ When the database is initialized then the user must run "node seeds/index" to seed the database with some given data

* 🔟 The user must start the server in local host by runnding "npm start" and can then perform request in Insomnia

## Technologies Used

* JavaScript

* Node.JS

* Npm packages: Express, mysql2, sequelize & dotenv

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Actual Behaviour

* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file THEN I am able to connect to a database using Sequelize

* WHEN I enter schema and seed commands THEN a development database is created and is seeded with test data

* WHEN I enter the command to invoke the application THEN my server is started and the Sequelize models are synced to the MySQL database

* WHEN I open API GET routes in Insomnia Core for categories, products, or tags THEN the data for each of these routes is displayed in a formatted JSON

* WHEN I open an api get route with an id in the path "/api/categories/1" THEN I am presented with the json object of the category with the specific id (Same fro tags and products)

* WHEN I enter a path which does not exist THEN depending on the error it will show an error message or will direcr you to a status 200 code with a message showing that it is a wrong route

* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core THEN I am able to successfully create, update, and delete data in my database


## Mock-Up

🎥 The GIF shows the GET Routes of the backend application:

![Demo of all get routes](./Assets/Readme/get-routes.gif)

🎥 The GIF shows the POST Routes of the backend application, where we add a category, a tag and a product:

![Demo of all get routes](./Assets/Readme/post-routes.gif)

🎥 The GIF shows the PUT Routes of the backend application:

![Demo of all get routes](./Assets/Readme/put-routes.gif)

🎥 The GIF shows the DELETE Routes of the backend application, where we add a category, a tag and a product:

![Demo of all get routes](./Assets/Readme/delete-routes.gif)


## Credits

* https://emojipedia.org/keycap-10/
* https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf
* https://stackoverflow.com/questions/49995637/sequelizeforeignkeyconstrainterror-on-nested-findorcreate-inside-a-loop
* https://www.npmjs.com/package/sequelize
* https://sequelize.org/
* https://sequelize.org/master/manual/validations-and-constraints.html


© 2021 Zahra Mertens, E-commerce-backend