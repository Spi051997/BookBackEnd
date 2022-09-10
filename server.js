const express=require('express');
const app=express();
const dotenv=require('dotenv');
const dbconnection=require('./config/mongoose');
const Bookroutes=require('./routes/Bookroutes');
dbconnection
 dotenv.config();
 
 app.use(express.json());

 app.use('/api/book',Bookroutes);


PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is up at ${PORT}`);
})
