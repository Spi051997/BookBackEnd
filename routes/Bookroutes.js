const express=require('express');
const router=express.Router();
const {bookregistraion,bookGetData,Searchrecord}=require('../controller/BookController');
 // book registration route path
router.post('/registration',bookregistraion);
router.get('/bookrecords',bookGetData);
router.get('/serach/:name',Searchrecord);    

module.exports=router;