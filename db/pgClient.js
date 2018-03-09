const { Client } = require('pg');

const client = new Client({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.POSTGRES_USER || process.env.RDS_USERNAME || '',
  database: process.env.POSTGRES_DB || process.env.RDS_DB_NAME || 'thumbnails',
  password: process.env.RDS_PASSWORD || '',
  port: process.env.RDS_PORT || '',
});

module.exports = client;
