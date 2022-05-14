const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hi, Week 12 Lab - IT19513188 updated from CICD");
})

app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
});