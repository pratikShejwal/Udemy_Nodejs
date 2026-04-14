import express from 'express'
import db from '../db/index.js'
import { usersTable,userSessions } from '../db/schema.js'
const router = express.Router()
import {eq} from 'drizzle-orm'
import {randomBytes,createHmac} from 'node:crypto'
import jwt from 'jsonwebtoken'
import { authMiddleware,restrictToRole } from '../middlewares/auth.middleware.js'

const restrictToAdminMiddleware = restrictToRole('admin')

router.get('/users',authMiddleware,restrictToAdminMiddleware,async(req,res)=>{

    if (!req.user) {
        return res.json({error:"not authenticated"})
    }
    const user = await db.select({
        id: usersTable.id,
        name: usersTable.name,
        email:usersTable.email
    })
    .from(usersTable)

    return res.json({user})
})

export default router