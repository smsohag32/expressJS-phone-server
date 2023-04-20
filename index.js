const express = require('express')
const phones = require('./phones.json')
const app = express()
const port = 3000



app.get('/', (req, res) =>{
    res.send('fjk')
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = req.params.id;
    const phone = phones.find(phone => phone.id == id || [])
    res.send(phone)
})

app.get('/data', (req, res) =>{
    res.send('masjdflksadjlkfaslkjfasjlkfaslkdfjk');
})

// listen to app

app.listen(port, () =>{
    console.log(`my phone server is started ${port}`)
})