const {drizzle} = require('drizzle-orm/node-postgres')
const db = drizzle(process.env.DB_URL)
module.exports = db
