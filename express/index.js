const express = require('express')

const app = express()
app.get('/',(req,res)=>{
    res.end('Home-Page')
})
app.get('/about',(req,res)=>{
    res.end('About-Page')
})
app.post('/create',(req,res)=>{
    res.status(201).end('created')
})

app.listen(8000,()=>{
    console.log('server is running');
})