const {defineConfig} = require('drizzle-kit')
require('dotenv/config')
// const {drizzle} = require('drizzle-orm/node-postgres')

const config = defineConfig({
    dialect: 'postgresql',
    out:'./drizzle',
    schema: './drizzle/schema.js',
    dbCredentials: {
        url: process.env.DB_URL,
    }
})

module.exports = config