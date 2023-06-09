const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
     "title": {
          type: String,
          required: true
     },
     "price" : {
          type: Number,
          required: true
     }
},
{
     timesstamps: true
}
);

const BookModel = mongoose.model('book', bookSchema);

module.exports = BookModel;