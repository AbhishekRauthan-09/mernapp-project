const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("Hello from the server")
})

app.get('/about', (req, res) =>{
    res.send("Hello from the about")
})

app.get('/contact', (req, res) =>{
    res.send("Hello from the contact")
})

app.get('/signin', (req, res) =>{
    res.send("Hello from the Signin")
})

app.get('/signup', (req, res) =>{
    res.send("Hello from the SignUp")
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});