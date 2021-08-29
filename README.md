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
8. [Bonus](#bonus)
9. [Mock-Up](#mock-up)
10. [Credits](#credits)


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

* 8️⃣ To protect your personal data you need to create a ".env" file which includes your mysql password, the database name, and the user such as:  ![env-Demo](./Assets/Readme/env-demo.png)

* 9️⃣ The user must start the server in local host by runnding "npm start" and can then perform request in insomnia

## Technologies Used

* JavaScript

* Node.JS

* Npm packages: Express, mysql2, sequelize & dotenv

## User Story

AS A business owner I WANT to be able to view and manage the departments, roles, and employees in my company SO THAT I can organize and plan my business

## Actual Behaviour

* WHEN I start the application THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

* WHEN I choose to view all departments THEN I am presented with a formatted table showing department names and department ids

* WHEN I choose to view all roles THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

* WHEN I choose to view all employees THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles departments, salaries, and managers that the employees report to

* WHEN I choose to add a department THEN I am prompted to enter the name of the department and that department is added to the database

* WHEN I choose to add a role THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

* WHEN I choose to add an employee THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

* WHEN I choose to update an employee role THEN I am prompted to select an employee to update and their new role and this information is updated in the database


## Bonus

* 🏆 WHEN I select 'view employees by manager" I am able to select an employee by name and THEN select a new manager for the selecte  employee

* WHEN I select 'View employees by department' in the menu THEN I can select a department and will see a table with all employees in this department

* WHEN I select 'View the budget of the department' I can select a department and will se a abel with the sum of all salaries of roles assigned to this department

* WHEN I select 'Update an employees manager' I can select an employee and select the manager for this employee

* WHEN I select any of the "delete" options the I can delete an employee, a role or department from the database

## Mock-Up

🎥 The GIF shows the command line application and the functionality:

![Code-Demo](./assets/empTracker.gif)

## Credits

* https://ezgif.com/crop/ezgif-3-e35ddab000ce.gif
* https://www.geeksforgeeks.org/check-if-an-array-is-empty-or-not-in-javascript/
* https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
* https://www.w3schools.com/sql/sql_intro.asp
* https://dev.mysql.com/doc/



© 2021 Zahra Mertens, E-commerce-backend