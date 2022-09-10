const mongoose=require('mongoose');

const bookScheme=mongoose.Schema({

    Book_Name:{type:String,required:true,unique:true},
    Category:{type:String,required:true},
    Price:{type:Number,required:true},
    Quntity:{type:Number,required:true},
    Author_Name:{type:String,required:true},
    Upload_date:{type:String,required:true}   
},
{timestamps: true}
);

const Book=mongoose.model("BookSchema",bookScheme);

module.exports=Book;

