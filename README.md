# User Management API

This is a simple RESTful API built using Node.js, Express, and MySQL to manage basic user records. The API supports Create, Read, Update, and Delete (CRUD) operations and is structured using a clean, modular folder layout.

## Features

* Add a new user
* Get all users
* Update existing user details
* Delete a user

## Technologies Used

* Node.js
* Express.js
* MySQL (via mysql2 package)
* dotenv for environment variable management
* Postman for API testing

## Project Structure

```
user-management-api/
├── src/
│   ├── controllers/        # Request handlers (CRUD logic)
│   ├── routes/             # API routes
│   ├── db.js               # MySQL connection setup
│   └── server.js           # Main application entry point
├── .env                    # Environment variables (not committed)
├── .gitignore              # Files/folders to ignore in Git
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
```

## API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /api/users      | Retrieve all users |
| POST   | /api/users      | Create a new user  |
| PUT    | /api/users/\:id | Update user by ID  |
| DELETE | /api/users/\:id | Delete user by ID  |

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

## License

This project is open-source and available under the [MIT License](LICENSE).
