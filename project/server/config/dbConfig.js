const mongoose = require('mongoose')
console.log('DATABASE_URL:', process.env.DATABASE_URL); 
mongoose.connect(process.env.DATABASE_URL)

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})