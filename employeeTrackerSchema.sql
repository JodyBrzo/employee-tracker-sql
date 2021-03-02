DROP DATABASE IF EXISTS employee_trackerDB;
Create DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id int NOT NULL,
manager_id int,
PRIMARY KEY(id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id int,
PRIMARY KEY(id)
);

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(30),
PRIMARY KEY(id)
);