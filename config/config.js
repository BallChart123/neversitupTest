require('dotenv').config();

module.exports = {
  port : process.env.PORT,
  database : {
    type : process.env.DATABASE_CLIENT,
    database : process.env.DATABASE_NAME,
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    port : process.env.DATABASE_PORT,
    timeout : process.env.DATABASE_TIMEOUT,
    pool : {
      min : 0,
      max : 10
    },
  }
}