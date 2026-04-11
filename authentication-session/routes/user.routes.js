import express from 'express'
import db from '../db/index.js'
import { usersTable,userSessions } from '../db/schema.js'
const router = express.Router()
import {eq} from 'drizzle-orm'
import {randomBytes,createHmac} from 'node:crypto'

router.get('/')
router.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body
    const [checkExistingUser] = await db
    .select()
    .from(usersTable)
    .where((table)=>eq(table.email,email))

    if (checkExistingUser) {
        return res.status(400).json({Error:"user already exists"})
    }

    const salt = randomBytes(256).toString('hex')
    const hashedPassword = createHmac('sha256',salt)
    .update(password)
    .digest('hex')

  const [user] =  await db.insert(usersTable).values({
        name,
        email,
        password: hashedPassword,
        salt,
    }).returning({id: usersTable.id})

    return res.status(201).json({id: user.id})

})
router.post('/login',async(req,res)=>{
    const {email,password} = req.body

    const [existingUser] = await db
    .select({
        id: usersTable.id,
        email: usersTable.email,
        salt: usersTable.salt,
        password: usersTable.password
    })
    .from(usersTable)
    .where((table)=>eq(table.email,email))

    if (!existingUser) {
        return res.status(400).json({Error:"user doesn't exists"})
    }

    const salt = existingUser.salt
    const existingHash = existingUser.password

    const newHash = createHmac('sha256',salt)
    .update(password)
    .digest('hex')

    if (newHash!==existingHash) {
        return res.status(400).json({error : "incorrect password"})
    }

      
        const [session] = await db.insert(userSessions).values({
        userId: existingUser.id
}).returning({id: userSessions.id})

  return res.json({message: 'login successfully',sessionId: session.id})


})


export default router