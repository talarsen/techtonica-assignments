//allows up to 
const Pool = require("pg").Pool;

//configure where and how to configure the database
const pool = new Pool({
  user: "taralarsen",
  password: "Nature823",
  database: "eventonica2",
  port: 5432,
  host: "localhost"
});

module.exports = pool;