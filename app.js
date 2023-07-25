const express = require("express");
const app = express()
const port = process.env.PORT ||  8000
app.get('/', (req, res)=>{
    res.send('Hii, I am live')
})

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