'use strict';

const config = {};

config.development = {
  mode: 'development',
  port: 3000,
  log: {
    level: 'debug',
    dir: 'logs',
  },
};

config.testing = {
  mode: 'testing',
  port: 3000,
  log: {
    level: 'warn',
    dir: 'logs',
  },
};

config.production = {
  mode: 'production',
  port: 3000,
  log: {
    level: 'error',
    dir: 'logs',
  },
};

config.db =  {
    user: 'sa',
    password: '',
    server: '192.168.1.71', // You can use 'localhost\\instance' to connect to named instance
    database: 'CIPOTrademarkDW',
}
const configProperties = process.argv[2] ||
  process.env.NODE_ENV ||
  'development';

module.exports = config[configProperties];
