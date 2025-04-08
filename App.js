const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.get('/profile', (req, res) => {
    res.render('pages/profile');
});

app.get('/project', (req, res) => {
    res.render('pages/project');
});

app.get('/resources', (req, res) => {
    res.render('pages/resume');
});

app.get('/progress', (req, res) => {
    res.render('pages/progress');
});

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})