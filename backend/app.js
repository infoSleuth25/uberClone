const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log(`App is listening on the port ${port}.`);
})