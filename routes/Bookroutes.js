const express=require('express');
const router=express.Router();
const {bookregistraion,bookGetData,Searchrecord,Testroute,Updaterecord}=require('../controller/BookController');
 // book registration route path
router.post('/registration',bookregistraion);
router.get('/bookrecords',bookGetData);
router.get('/serach',Searchrecord); 
router.get('/test',Testroute);   
router.put('/updaterecord',Updaterecord);

module.exports=router;