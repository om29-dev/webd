const express = require('express')
const path = require('path')

const app = express()


app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})