const express = require("express");
const app = express()
const port = process.env.PORT ||  8000
const products_routes = require('./routes/products')

// app.get('/', (req, res)=>{
//     res.send('Hii, I am live')
// })
// Middelware  or to set router
app.use('/api/products', products_routes )

const start = async() => {
    try {
        app.listen(port, ()=>{
            console.log(`app running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()