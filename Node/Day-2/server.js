const express = require("express");
const fs = require("fs");
const path = require("path");


const outputFolder ="./output";

// console.log("To check the output folder is already there or nor...",
// fs.existsSync(outputFolder));
if (!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

const app = express();
const PORT = 3000;

app.get("/createFile", (req, res) => {
    const currentTime = new Date();

    const day = currentTime.getDay().toString();
    const date = currentTime.getDate().toString();
    const month = (currentTime.getMonth() +1).toString();
    const year = currentTime.getFullYear().toString();
    const hours = currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const sec = currentTime.getSeconds().toString();

    const dateTimeForFileName = `${day}-${date}-${month}-${year}-${hours}-${mins}-${sec}.txt`;

    const filePath = path.join(outputFolder, dateTimeForFileName);
    console.log("filePath:", filePath);

    fs.writeFile(filePath, currentTime.toISOString(), (err) => {
        if(err) {
            res.status(500).send(`Error creating file: ${err}`);
            return;
        }

        res.send(`File create successfully at: ${filePath}`);    
    });
});

app.get("/getFiles", (req, res) => {
    fs.readdir(outputFolder, (err, files) => {
        if(err) {
            res.status(500).send(`Enter reading directory: ${err}`);
            return;
        }
        
        console.log("files", files);
        const textFiles = files.filter((file) => path.extname(file) === ".txt");

       res.json(textFiles);
    });
});

app.listen(PORT, () => {
    console.log("server is runnign on PORT", PORT);
});