const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
// const mongodb=require('')
const { find } = require("../model/bookmodel");
const BookSchema = require("../model/bookmodel");


// ** Insert Reord **
const bookregistraion = asyncHandler(async (req, res) => {
  const { Book_Name, Category, Price, Quntity, Author_Name, Upload_date } =
    req.body;

  if (
    !Book_Name ||
    !Category ||
    !Price ||
    !Quntity ||
    !Author_Name ||
    !Upload_date
  ) {
    res.status(400);
    throw new Error("Enter the details");
  }

  const Recordinsert = await BookSchema.create({
    Book_Name,
    Category,
    Price,
    Quntity,
    Author_Name,
    Upload_date,
  });

  if (Recordinsert) {
    res.status(200).json({
      _id: Recordinsert._id,
      Book_Name: Recordinsert.Book_Name,
      Category: Recordinsert.Category,
      Price: Recordinsert.Price,
      Quntity: Recordinsert.Quntity,
      Author_Name: Recordinsert.Author_Name,
      Upload_date: Recordinsert.Upload_date,
    });
  } else {
    res.status(401);
    throw new Error("Error!");
  }
});

const bookGetData = asyncHandler(async (req, res) => {
  const Getrecords = await BookSchema.find();
  if (Getrecords) {
    res.status(200).json(Getrecords);
  } else {
    res.status(400);
    throw new Error("Error while Fetching Records");
  }
});

// Serach record

const Searchrecord = asyncHandler(async (req, res) => {
  const bname = req.query.bookname
    ? {
        $or: [{ Book_Name: { $regex: req.query.bookname } }],
      }
    : {};

  console.log({ bname: req.query.bookname });

  const findname = await BookSchema.find(bname);
  console.log(findname);

  res.send(findname);
});

// ** Update the Book Prrice

const Updaterecord = asyncHandler(async (req, res) => {
  const bookname = req.body.name;
  console.log(bookname);

  const updaterecors = await BookSchema.updateOne(
    {
      Book_Name: bookname,
    },
    {
      $set: req.body,
    }


  );

  if (updaterecors) {
    res.status(200).json(updaterecors);
  } else {
    res.status(400);
    throw new Error("Update failed");
  }
});

//** Delete the  book record */

const Deleterecord=asyncHandler(async(req,res)=>{

   const del=req.body.id;
   console.log(del)
   
   const recdelete=await BookSchema.findByIdAndDelete({_id:del});

   try{
     if(recdelete)
     
      console.log(recdelete)
      res.status(200).send("Sucessul");
      console.log(recdelete);
   }
   catch(error)
   {
    res.status(401);
    throw new Error(`Id has already deleted ${error}`);

   } 

  // if(!recdelete)
  // {
  //   res.status(400);
  //   throw new Error(`Id has already deleted`);
  // }
})

const Testroute = asyncHandler(async (req, res) => {
  const vari = req.query.name;
  const age = req.query.age;
  res.send({ name: vari, age: vari });
});
module.exports = {
  bookregistraion,
  bookGetData,
  Searchrecord,
  Testroute,
  Updaterecord,
  Deleterecord
};
