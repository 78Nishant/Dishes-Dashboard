
require('dotenv').config();
const cors=require('cors');
const express=require('express');
const server=express();
const dishesroutes=require('./routes/routes');
const mongoose = require('mongoose');

server.use(cors());
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.CONNECT_URI);
    console.log("Database connected")
}

server.use('/',dishesroutes.router);


const port=process.env.PORT;
server.listen(port,()=>{
    console.log(`The server is connected at ${port}`)
})