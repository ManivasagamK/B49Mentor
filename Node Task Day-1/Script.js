const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const resultFolder = './Output';

if(!fs.existsSync(resultFolder)){
    fs.mkdirSync(resultFolder);
}

app.get("/createFiles", (req,res)=>{
    const currentTime = new Date();

    const year = currentTime.getFullYear().toString();
    const month =( currentTime.getMonth() + 1).toString();
    const date = currentTime.getDate().toString();
    const hrs = currentTime.getHours().toString();
    const mins = currentTime.getMinutes().toString();
    const secs = currentTime.getSeconds().toString();

    const fileName = `${year}-${month}-${date}-${hrs}-${mins}-${secs}.txt`;

    const filepath = path.join(resultFolder, fileName);

    fs.writeFile(filepath, currentTime.toISOString(),(err)=>{
        if(err){
            res.status(500).send(`Error creating file: ${err}`);
            return;
        }
        res.send(`FILE IS CREATED SUCCESSFULLY AT: ${filepath}`);
    })
})

app.get("/getFiles",(req,res)=>{
    fs.readdir(resultFolder,(err,files)=>{
        if(err){
            res.status(500).send(`Error creating file: ${err}`);
            return;
        }
        console.log(`List of Files: ${files}`);
        const Textfiles = files.filter((file)=>path.extname(file) === ".txt");
            res.json(Textfiles);
    })
})

app.listen(PORT,()=>{
   console.log( `Server running in port ${PORT}`);
})
