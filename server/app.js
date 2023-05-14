const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


dotenv.config(({path:'./.env'}))
require('./db/conn')

app.use(express.json())
app.use(cookieParser())


// We link the Router File 
app.use(require('./routers/routes'))


const port = process.env.PORT;


// app.get('/about', (req, res) =>{
//     res.send("Hello from the about")
// })

app.get('/contact', (req, res) =>{
    res.send("Hello from the contact")
})

app.get('/signin', (req, res) =>{
    res.send("Hello from the Signin")
})

app.get('/signup', (req, res) =>{
    res.send("Hello from the SignUp")
})

// app.get("/aboutme" , async(req, res) => {
//     console.log(req.cookies.jwttoken)
//     res.send("About me page")
//   });

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});