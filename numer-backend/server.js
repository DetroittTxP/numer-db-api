const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const port = 5555;
const app = express();

app.use(cors());


app.get('/',(req,res)=>{
    res.send({START:'SUCCESSFUL'})
})






app.listen(port,()=>{
    console.log(`SERVER RUN ON PORT ${port}`);
})