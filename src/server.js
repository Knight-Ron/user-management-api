const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routes/users');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Mount all user-related routes at /api/users
app.use('/api/users', userRouter);

// Start the server on the defined port (default: 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
