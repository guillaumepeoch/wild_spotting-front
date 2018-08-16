const express = require('express');
const app = express();

app.get('/yo',function(req,res){
  console.log('Yo');
  res.json({message:'Yoyo from Node Server!'})
});


const port = process.env.PORT || 3123;
app.listen(port);
