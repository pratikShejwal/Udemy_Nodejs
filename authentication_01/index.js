import express from 'express'
const app = express()
const PORT = 8000

app.use(express.json())
const DIARY = {};
const EMAILS = new Set()

app.post('/signup',(req,res)=>{
    const {name, email, password} = req.body

    if (EMAILS.has(email)) {
        return res.status(400).json({error:'email taken'})
    }

    const token = `${Date.now()}`
     
    DIARY[token] = {name,email,password}
    EMAILS.add(email)
          return res.status(201).json({message:'user created',token})
})

app.post('/me',(req,res)=>{
    const {token} = req.body
    if (!token) {
        return res.status(404).json({error:'missing token'})
    }
    if (!(token in DIARY)){
        return res.status(400).json({error:'not token'})
    }
    const entry = DIARY[token]
    return res.json({data: entry})
})

app.post('/private-data',(req,res)=>{

    const {token} = req.body

    if (!token) {
        return res.status(404).json({error:'missing token'})
    }
    if (!(token in DIARY)){
        return res.status(400).json({error:'not token'})
    }
    const entry = DIARY[token]

    return res.status(200).json({message: 'Access Granted'})
})

app.listen(PORT,()=>{
    console.log('running on 8k');
    
})