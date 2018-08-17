/* EXPRESS */
const express = require('express');
const app = express();

/* MONGOOSE */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/config', { useNewUrlParser: true } );

const encounterSchema = mongoose.Schema({
  "encounter_id": Number,
  "encounter_lat": Number,
  "encounter_lng": Number,
  "encounter_date": String,
  "encounter_species_id": Number,
  "encounter_enctype_id": Number,
  "encounter_group_id": Number,
  "encounter_outcome_id": String,
  "encounter_locality": String,
  "location_approximate": Number,
  "encounter_media_reference": Number,
  "attractant_ids": String,
  "attractant_names": String,
  "attractant_colours": String,
  "media_name_icon": String,
  "species_id": Number,
  "species_name": String,
  "species_mapicon_hotx": Number,
  "species_mapicon_hoty": Number,
  "timestamp_encounter_date": Number,
  "timestamp_now": Number
});

const Encounter = mongoose.model('Encounter',encounterSchema);



const specieSchema = mongoose.Schema({
    "species_id": Number,
    "species_name": String,
    "species_mapicon_id": Number,
    "species_image_id": Number,
    "media_name_icon": String,
    "media_name_info": String
});

const Species = mongoose.model('Species',specieSchema);


/* REST ENDPOINTS */
app.get('/encounters',function(req,res){
  if(req.query.species_id){
    console.log(req.query.species_id);
    Encounter.find({ encounter_species_id : req.query.species_id },function(err,doc){
      if(err) console.error(err);
      res.json(doc);
    });
  } else if(req.query.encounter_id){
    Encounter.find({ encounter_id : req.query.encounter_id },function(err,doc){
      if(err) console.error(err);
      res.json(doc);
    });
  } else {
    Encounter.find(function(err,doc){
      if(err) console.error(err);
      res.json(doc);
    });
  }
});

app.get('/species',function(req,res){
  Species.find(function(err,doc){
    if(err) console.error(err);
    res.json(doc);
  });
})


const port = process.env.PORT || 3123;
app.listen(port);
