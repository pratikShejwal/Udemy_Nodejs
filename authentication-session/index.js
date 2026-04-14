
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
import adminRouter from './routes/admin.routes.js'

app.use(express.json())

app.get('/',(req,res) => {
  return res.json({status: 'Server is running'})
})
app.use('/user',userRouter)
app.use('/admin',adminRouter)

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})
