require('dotenv').config()
const express = require("express");
const app = express()
const port = process.env.PORT ||  8000
const products_routes = require('./routes/products')
const connectDb = require('./db/connect')

app.use('/api/products', products_routes )

const start = async() => {
    try {
        await connectDb()
        app.listen(port, ()=>{
            console.log(`app running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()