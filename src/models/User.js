const db = require("../utils/db");
const bcrypt = require("bcrypt");

class User{

    constructor(username, email, password, firstname, lastname, date_of_birth){
        this.username=username;
        this.email=email;
        this.password=password;
        this.firstname=firstname;
        this.lastname=lastname;
        this.date_of_birth=date_of_birth;
    }

    async createUser() {
        try {
            console.log(this);
            const hash = await bcrypt.hash(this.password, 10);
            this.password = hash;
            const query = 'INSERT INTO librarial.users SET ?';
            const [results] = await db.query(query, {
                username: this.username,
                email: this.email,
                password: this.password,
                first_name: this.firstname,
                last_name: this.lastname,
                date_of_birth: this.date_of_birth,
            });

            return results.insertId;
        }catch (err) {
            console.log("Users.js - createUser");
            console.log(err);
            throw err;
        }
    }


    static async findUserById(userId) {
        // Retrieve and return the user by their ID
    }
      

    static async findUserByUsernameOrEmail(usernameOrEmail) {
        try {
            const query = usernameOrEmail.includes("@")? 'SELECT * FROM users WHERE email = ?': 'SELECT * FROM users WHERE username = ?';
            const [results, field] = await db.query(query, [usernameOrEmail]);
            return results;
        }catch(err){
            console.err('Error in findUserByUsernameOrEmail:', err);
            throw err; // Rethrow the error for higher-level error handling
        }
    }   

    async hashPassword() {
        // Hash the user's password using a secure hashing algorithm
        // Update the password attribute with the hashed value
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
    }

    async validatePassword(plainTextPassword) {
        // Compare the plain text password with the hashed password
        // Return true if they match, false otherwise
    }

    async updateDateOfBirth(newDateOfBirth) {
        // Update the user's date of birth in the database
    }
}

module.exports = User;


    // CREATE TABLE users (
    //     id INT PRIMARY KEY AUTO_INCREMENT,
    //     username VARCHAR(255) NOT NULL UNIQUE,
    //     email VARCHAR(255) NOT NULL UNIQUE,
    //     password VARCHAR(255) NOT NULL,
    //     first_name VARCHAR(255) NOT NULL,
    //     last_name VARCHAR(255) NOT NULL,
    //     bio TEXT,
    //     date_of_birth DATE,
    //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    //   );
      
    //   CREATE TABLE user_images (
    //     id INT PRIMARY KEY AUTO_INCREMENT,
    //     user_id INT, -- Reference to the user's ID
    //     image_url VARCHAR(255) NOT NULL,
    //     is_profile_image BOOLEAN DEFAULT FALSE, -- Indicates if the image is the profile image
    //     uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    //     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    //   );
    //   this is how i created the user and user_image table 
    //   and the relation is 
    //   a user  can have a lot images
    //   but all usres images are saved in one table
    //   but now 
    //   i want top create a 