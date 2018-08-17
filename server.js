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


/* REST ENDPOINTS */
app.get('/encounters',function(req,res){
  console.log('Encounters Request ');
  Encounter.find(function(err,doc){
    if(err) console.error(err);
    res.json(doc);
  });
});


const port = process.env.PORT || 3123;
app.listen(port);
