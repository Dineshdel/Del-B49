const bodyParser = require("body-parser");
const express = require("express");
const  mongoose  = require("mongoose");

const app = express();

const PORT = 3000;

// url localhost not work use (0.0.0.0)
// const DB_URL ="mongodb://localhost:27017/admin";
const DB_URL ="mongodb://0.0.0.0:27017/admin";
 
//schema is property
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String,
    language: String,
});

const Book = mongoose.model("Book", bookSchema);

app.use(bodyParser.json());

// connect to MongoDB
mongoose
.connect(DB_URL, {})
.then(() => console.log("Connected to Mongoose"))
.catch((err) => console.log("Could not connect to Mangoose", err));

// Create(POST) - Add a new Book

app.post("/book", async (req, res) => {
    const book =new Book(req.body);
    try{
        const savedBook = await book.save();
        res.status(201).send(savedBook);
    }catch(error) {
        res.status(400).send(error.message);
    }
});

// Read - list of Book

app.get("/books", async (req, res) => {
    try{
        const books = await Book.find();
        res.status(201).send(books);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

// this get id is find the values

app.get("/book/:id", async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(201).send(book);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

// Update - update the value

app.put("/book/:id", async (req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.status(201).send(book);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

// Delete - delete the value

app.delete("/book/:id", async (req, res) => {
    try{
        const result = await Book.findByIdAndDelete(req.params.id);
        if(result) res.status(201).send({message: "Book deleted successfuly..."});
        else res.status(404).send("Book is not found");
        res.status(201).send(books);
    } catch(error) {
        res.status(400).send(error.message);
    }
});



app.listen(PORT,() => {
    console.log("Server is running on PORT",PORT);
});