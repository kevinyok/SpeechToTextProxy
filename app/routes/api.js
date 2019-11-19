'use strict';

// Import express and create a new router
const express = require('express');

const source = require('rfr');
const logger = source('app/logger');

const Response = source('app/http').Response;

// Disabling since eslint does not like that Router starts with a capital
// eslint-disable-next-line new-cap
const router = express.Router();

// Creates a test route to show how a route can be added to the server
router.route('/test')
    .get((req, res) => {
      logger.debug('/test api endpoint was reached');
  
      const response = Response.success()
          .addMessages('Endpoint was called successfully');

      res.status(response.code).send(response.toJson());
    });

// Export the router with all mounted paths
module.exports = router;
