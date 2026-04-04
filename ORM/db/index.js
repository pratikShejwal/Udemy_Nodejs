
const { log } = require('console');
const {drizzle} = require('drizzle-orm/node-postgres')
console.log(process.env.DB_URL);

const db = drizzle(process.env.DB_URL)

module.exports = db;