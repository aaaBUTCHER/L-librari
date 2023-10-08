const mysql= require('mysql2');

const options = {
    host: "localhost",
    user: "root",
    database: "librarial",
    password: "root"
}
const pool = mysql.createPool(options);

module.exports = pool.promise();

/*
create database librariaL;
use librarial;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  bio TEXT DEFAULT NULL,
  date_of_birth DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  role VARCHAR(255) DEFAULT 'user'
);

CREATE TABLE user_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT, -- Reference to the user's ID
  image_url VARCHAR(255) NOT NULL,
  is_profile_image BOOLEAN DEFAULT FALSE, -- Indicates if the image is the profile image
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
*/