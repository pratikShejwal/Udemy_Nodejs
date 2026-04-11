
import express from 'express'
import('dotenv/config')
const app  = express()
const PORT = process.env.PORT || 8000

import userRouter from './routes/user.routes.js'

app.use(express.json())
app.get('/',(req,res) => {
  return res.json({status: 'Server is running'})
})
app.use('/user',userRouter)

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})
