const express = require("express");
const path=require('path')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const app = express()
const publicDirectoryPath = path.join("../web-server/src");
app.use(express.static(publicDirectoryPath)) 


app.get('test_text', (req, res) => {
    res.send("18360859051");
})
app.get('test_html', (req, res) => {
    res.send("Beyzanur Gürses");
})
app.get('test_json', (req, res) => {
    res.send("Beyzanur Gürses");
})


const port =process.env.PORT || 3000

app.listen(port, () => {
    console.log('this is ' +  port)
})



