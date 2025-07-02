# User Management API

A lightweight RESTful API built with Node.js, Express, and MySQL to perform basic user management tasks. Designed to simulate admin-side operations like user onboarding, updates, and record cleanup.


## Features

* Create new user records
* Fetch all users
* Update existing user details
* Delete users by ID
* File-based logging for all requests (logs/api.log)

## Technologies Used

* Node.js
* Express.js
* MySQL (via mysql2 package)
* dotenv for environment variable management
* Postman for API testing
* File I/O logging via custom middleware

## Project Structure

```
user-management-api/
├── src/
│   ├── controllers/        # CRUD logic
│   ├── routes/             # Route definitions
│   ├── utils/              # Logger (file logging)
│   ├── db.js               # MySQL connection
│   └── server.js           # App entry point
├── logs/                   # Request logs (auto-generated)
├── .env                    # DB credentials (excluded from Git)
├── .gitignore              # Ignore rules
├── package.json            # Project metadata
├── README.md               # You're reading it!

```

## API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /api/users      | Retrieve all users |
| POST   | /api/users      | Create a new user  |
| PUT    | /api/users/:id | Update user by ID  |
| DELETE | /api/users/:id | Delete user by ID  |

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/user-management-api.git
cd user-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder and add your database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=userdb
PORT=3000
```

4. Ensure MySQL is running and execute the following SQL to create the database and table:

```sql
CREATE DATABASE IF NOT EXISTS userdb;
USE userdb;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

5. Start the server:

```bash
npm start
```

6. Use Postman or curl to interact with the API.

## Author

Ronald Jacob
