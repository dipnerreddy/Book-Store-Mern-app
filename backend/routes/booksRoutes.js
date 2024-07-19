const router = require("express").Router();
const bookModel = require("../models/booksModel");



// Post Request
router.post("/add",async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(()=> {
            res.status(200).json({message: "Book Added Successfully"});
        });

    } catch (error) {
        console.log(error)
    }
})


// Get Request
router.get("/getBooks", async (req, res)=> {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({books});
    } catch (error) {
        console.log(error);
    }
});

// Get Request By Id
router.get("/getBooks/:id", async(req,res)=>{
    let books;
    const id= req.params.id;
    try {
        books = await bookModel.findById(id);
        res.status(200).json({books});
    } catch (error) {
        console.log(error);
    }
}); 

// Update Book By Id
router.put("/updateBook/:id", async (req,res) => {
    let books;
    const id=req.params.id;
    const {bookname,description,author,image,price}=req.body;
    try {
        books =await bookModel.findByIdAndUpdate(id, {
            bookname,
            description,
            author,
            image,
            price
        });
        await books.save().then(() => { res.json({message: "Book Details Updated"});
        })
    } catch (error) {
        console.log(error);
    }
});


// Delete Book By Id
router.delete("/deleteBook/:id", async(req,res) => {
    let  books;
    const id=req.params.id;
    try {
        books=await bookModel.findByIdAndDelete(id).then(() => {
            res.status(201).json({message: "Book Deleted Successfully"})
        })

    } catch (error) {
        console.log(error);
    }
})





module.exports = router;