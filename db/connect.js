const mongoose = require('mongoose');
const uri = process.env.DB
const connectDb = () => {
    console.log('Db connected');
  return mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
}
module.exports = connectDb