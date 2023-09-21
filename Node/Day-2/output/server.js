const express = require("express");
const fs = require('fs'); 
const  path = require('path');

const outputfolder = "./out";

console.log(" To Check the wether the folder",
fs.existsSync(outputfolder));

if(!fs.existsSync(outputfolder)){
    
    fs.mktirSync(outputfolder);
   
}

const app = express();

const PORT = 3000;

app.listen(PORT, () =>
{
    console.log("Server is running on PORT", PORT);

});