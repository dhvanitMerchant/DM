const express = require('express');
const app = express();

const pageRoutes = require('./routes/pages');

// Registering our pageRoutes
app.use('/', pageRoutes);
// Exporting the chang

module.exports = app;