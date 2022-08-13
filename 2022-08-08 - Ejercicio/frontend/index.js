const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('css',express.static('static/css'));
app.use('js',express.static('static/js'));
app.use('img',express.static('static/img'));

app.listen(port,() =>{
    console.log(`Frontend ${port}`);
})