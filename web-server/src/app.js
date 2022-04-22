const express = require("express");


const path=require('path')
console.log(__dirname)
console.log(__filename)

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
console.log(publicDirectoryPath)
app.use(express.static(publicDirectoryPath)) //kullanacğım statik dosya
homepage (app.com), help (app.com/help), about (app.com/about)


app.get('', (req, res) => {
    res.send()
})


const port =process.env.PORT || 3000

app.listen(port, () => {
    console.log('this is ' +  port)
})