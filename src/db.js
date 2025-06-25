const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Create and configure MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Attempt to connect to the database
db.connect(error => {
  if (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Stop execution if DB connection fails
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
