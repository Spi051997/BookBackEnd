const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const dbconnection=require('./config/mongoose');
const Bookroutes=require('./routes/Bookroutes');
dbconnection
 dotenv.config();

 PORT=process.env.PORT;
 
 app.use(cors());
 app.use(express.json());

 app.use('/api/book',Bookroutes);



app.listen(PORT,()=>{
    console.log(`Server is up at ${PORT}`);
})
