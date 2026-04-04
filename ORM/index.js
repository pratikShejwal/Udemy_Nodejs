// const { log } = require('console')
require('dotenv/config')
const db = require('./db/index')
const {usersTable} = require('./drizzle/schema')


const getAllUsers = async ()=>{
    const users = await db.select().from(usersTable)
    console.log(users);
    
    return users
}

const insertUser = async ({id,name,email})=>{
    await db.insert(usersTable).values({
        id,
        name,
        email
    })
}

getAllUsers()

// insertUser({id:1,name:'pratiek',email:'pratik@gmail.com'})
// insertUser({id:2,name:'pratiek2',email:'pratik2@gmail.com'})