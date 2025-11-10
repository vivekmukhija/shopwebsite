const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended : true}))
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req , res) => {
    res.render('index')
})


app.get('/sweets', (req , res) => {
    res.render('sweets')
})

app.get('/dairy', (req , res) => {
    res.render('dairy')
})

app.get('/contactus', (req , res) => {
    res.render('contactus')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});