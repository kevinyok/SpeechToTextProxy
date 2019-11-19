'use strict';

// Import express and create a new router
const express = require('express');

const source = require('rfr');
const logger = source('app/logger');

const middlewares = source('app/middleware');

const Response = source('app/http').Response;

// Disabling since eslint does not like that Router starts with a capital
// eslint-disable-next-line new-cap
const router = express.Router();

// Adds the middlware to log all api requests
router.use(middlewares.logRequests);

// Import the api routes and mount it to the path "/api"
const apiRoutes = require('./api.js');
router.use('/api', apiRoutes);

// Creates a ready route so api consumers know if the server is ready
router.route('/ready')
    .get((req, res) => {
      logger.debug('/ready endpoints was reached');
      
    });

// Returns a custom 404 response when a route is not found
router.use(middlewares.routeNotFound);

// Export the router with all mounted paths
module.exports = router;
