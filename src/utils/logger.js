const fs = require('fs');
const path = require('path');

// Go 2 levels up from src/utils → to project root
const logDir = path.join(__dirname, '..', '..', 'logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFilePath = path.join(logDir, 'api.log');

function logRequest(req, res, next) {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(logFilePath, log, err => {
    if (err) {
      console.error('Failed to write log:', err.message);
    }
  });
  next();
}

module.exports = logRequest;
