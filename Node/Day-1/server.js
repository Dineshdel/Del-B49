const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req,res) => {
    res.send("Hello, I Am Del");
})

app.get("/home", (req,res) => {
    res.send("Hello, I Am Del, How Are You...");
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});