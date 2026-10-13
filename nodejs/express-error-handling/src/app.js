const express = require('express');

const demoRoutes = require('./routes/demoRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Parse JSON requests
app.use(express.json());

// Register routes
app.use("/api", demoRoutes);

// Centralized error handler
app.use(errorHandler);

module.exports = app;