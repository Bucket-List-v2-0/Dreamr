const { Pool } = require("pg");
require("dotenv").config();

const { PG_URI } = process.env;

const pool = new Pool({
  connectionString:
    "postgres://nzhcrtym:aQhn348XnTStQ5h3BJ4KNsQSXQuXECfY@lallah.db.elephantsql.com:5432/nzhcrtym",
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query',params, text);
    return pool.query(text, params, callback);
  },
};
