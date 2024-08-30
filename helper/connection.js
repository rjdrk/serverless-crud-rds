const mysql = require('mysql');

const configDB = {
    connectionLimit: 10,
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    debug: true
}

let pool = mysql.createPool(configDB);

module.exports = pool;