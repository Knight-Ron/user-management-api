const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routes/users');
const logRequest = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(logRequest);
app.use('/api/users', userRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
