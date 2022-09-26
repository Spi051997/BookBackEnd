const express=require('express');
const app=express();
const winston=require('winston')
const expresswinsoton=require('express-winston')
const dotenv=require('dotenv');
const cors=require('cors');
const dbconnection=require('./config/mongoose');
const Bookroutes=require('./routes/Bookroutes');
dbconnection
 dotenv.config();

 PORT=process.env.PORT;

//  console.log(expresswinsoton);
 // winston  logger setup

 app.use(expresswinsoton.logger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
    
 }))
 
 app.use(cors());
 app.use(express.json());

 app.use('/api/book',Bookroutes);

 // winston error log setup

 app.use(expresswinsoton.errorLogger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )

 }));   




app.listen(PORT,()=>{
    console.log(`Server is up at ${PORT}`);
})
