// db-config
const knex = require('knex');

const config = {
  client: 'sqlite3',
  connection: {
    filename: './data/schemes.db3',
  },
  useNullAsDefault: true,
};

module.exports = knex(config);