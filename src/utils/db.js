const mysql= require('mysql2');

const options = {
    host: "localhost",
    user: "root",
    database: "librarial",
    password: "root"
}
const pool = mysql.createPool(options);

module.exports = pool.promise();