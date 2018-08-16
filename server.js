const express = require('express');
const app = express();

app.get('/yo',function(req,res){
  console.log('Yo');
  res.json({message:'Yoyo from Node Server!'})
});


const port = process.env.PORT || 3001;
app.listen(port);
