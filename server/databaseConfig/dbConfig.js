const mongoose = require('mongoose')


let gridFSBucket;


const connectDb = (url) => {
  return mongoose.connect(url)};

module.exports =  {connectDb}