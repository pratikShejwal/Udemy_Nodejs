
import express from 'express'
import('dotenv/config')
const app  = express()
const PORT = process.env.PORT || 8000
import db from './db/index.js'
import { usersTable,userSessions } from './db/schema.js'
const router = express.Router()
import {eq} from 'drizzle-orm'
import jwt from 'jsonwebtoken'

import userRouter from './routes/user.routes.js'

app.use(express.json())

// app.use(async(req,res,next)=>{

//    const sessionId = req.headers['session-id']

//     if (!sessionId) {
//         return next()
//     }

//     const [data] = await db.select(
//         {
            
//             sessionId: userSessions.id,
//             id: usersTable.id,
//             userId: userSessions.userId,
//             name: usersTable.name,
//             email: usersTable.email
//         }
//     )
//     .from(userSessions)
//     .rightJoin(usersTable,eq(usersTable.id,userSessions.userId))
//     .where((table)=>eq(table.sessionId,sessionId))

//     if(!data){
//         return next()
//     }

//     req.user = data
// })

app.use(async(req,res,next)=>{
    const tokenHeader = req.headers['authorization']

    if (!tokenHeader) {
       next()
    }

    const token = tokenHeader.split(' ')[1]

    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    
    req.user = decoded
    next()
})

app.get('/',(req,res) => {
  return res.json({status: 'Server is running'})
})
app.use('/user',userRouter)

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})
