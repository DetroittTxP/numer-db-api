const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const port = 5555;
const app = express();

app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'numerical'
})



db.connect(err=>{
     if(err)console.log(err);
     console.log(`connect to database SUCCESS`);
})

app.get('/root',(req,res)=>{
     db.query('SELECT * FROM root ORDER BY RAND() LIMIT 1',(err,result,field)=>{
         if(err)console.log(err);

         const equation = {
            equation:result[0].equation,
            xl:result[0].xl,
            xr:result[0].xr
         }

         res.json(equation)
     })
})


app.get('/',(req,res)=>{
    res.send({START:'SUCCESSFUL'})
})



app.listen(port,()=>{
    console.log(`SERVER RUN ON PORT ${port}`);
})