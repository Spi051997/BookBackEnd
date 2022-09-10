const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
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
  const bname = req.params.name;

  const findname = await BookSchema.find({
    $or: [{ Book_Name: { $regex: bname } },  { Author_Name: { $regex: bname } }],
  });

  res.status(200).json(findname);
});

module.exports = { bookregistraion, bookGetData, Searchrecord };