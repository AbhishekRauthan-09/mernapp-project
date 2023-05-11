const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config(({path:'./.env'}))
require('./db/conn')

app.use(express.json())


// We link the Router File 
app.use(require('./routers/routes'))

const port = process.env.PORT;
// Middleware
const middleware = (req, res, next) =>{
    console.log("hello middleware")
    next()
}


app.get('/about',middleware, (req, res) =>{
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