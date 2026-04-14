
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

app.use(async(req,res,next)=>{
    const token = req.headers['authorization']

    if(!token){
       return next()
    }
    if(!token.startsWith('Bearer')) 
        {
            return res.status(400).json({error: 'starts with bearer'})
        }
    
    const tok = token.split(' ')[1]

    const decoded = jwt.verify(tok,process.env.JWT_SECRET)

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
