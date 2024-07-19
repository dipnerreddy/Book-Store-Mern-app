const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://bookstore:bookstore123@cluster0.2x5qzqy.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("Connected to the Database"));