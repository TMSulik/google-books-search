const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var BookSchema = new Schema({

  title: String,
  authors: [String],
  description: String,
  image: String,
  link: String

});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;