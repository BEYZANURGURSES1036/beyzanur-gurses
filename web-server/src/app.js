const express = require("express");
const path=require('path')
console.log(__dirname)
console.log(__filename)

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath)) //kullanacğım statik dosya
//homepage (app.com), help (app.com/help), about (app.com/about)


app.get('', (req, res) => {
    res.send()
})

app.get('/', (req, res) => {
    
    console.log(req.query) 
    res.send(
        {
            products: [],
           
        })
})


const port =process.env.PORT || 3000

app.listen(port, () => {
    console.log('this is ' +  port)
})

