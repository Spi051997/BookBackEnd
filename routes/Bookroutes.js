const express=require('express');
const router=express.Router();
const {bookregistraion,bookGetData,Searchrecord,Testroute}=require('../controller/BookController');
 // book registration route path
router.post('/registration',bookregistraion);
router.get('/bookrecords',bookGetData);
router.get('/serach',Searchrecord); 
router.get('/test',Testroute);   

module.exports=router;