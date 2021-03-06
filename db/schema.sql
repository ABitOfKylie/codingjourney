CREATE DATABASE tutorials_db;

USE tutorials_db;

CREATE TABLE tutorials
(
	subject VARCHAR(50),
	title VARCHAR(250) NOT NULL,
	author VARCHAR(30),
	url VARCHAR(250),
	addNew BOOLEAN DEFAULT FALSE,
	date_entered TIMESTAMP,
	due_date DATE,
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-- TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

