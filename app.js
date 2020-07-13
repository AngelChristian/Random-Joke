const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
const jokesRoute = require('./routes/jokes');

// middleware
app.use('/',jokesRoute);
app.use(express.static('public'));

// app.use(bodyParser.json());

// view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    sendFile("index.html");

});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))