require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel");

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);

const connectDB = async () => {
     try {
          const conn =  await mongoose.connect(process.env.MONGODB_URI);
          console.log(`Database connected: ${conn.connection.host}`);
     } catch (error) {
          console.log(error);
          process.exit(1);
     }
}

router.get('/', (req, res) => {
     res.send({title: "Books"});
});

router.get('/add_note', async(req, res) => {
     try {
          const books = await Book.insertMany([
          {"title": "Dushime", "price" : 200},
          {"title": "Brother", "price" : 300}
          ]);
          res.send("The book has been added successfully");
     } catch (error) {
          console.log(erro);
     }
});

router.get('/books', async (req, res) => {
     try {
          const books = await Book.find({});
          if(!books){
               res.status(400).send("No books in the record");
          }
          res.status(200).json(books);
     } catch (error) {
          console.log(error)
     }
});

app.use('/api', router);

connectDB().then(() => {
     app.listen(PORT, () => {
          console.log(`Listening on port: ${PORT}`);
     })
});