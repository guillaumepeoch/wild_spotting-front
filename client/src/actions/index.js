import axios from 'axios';
const URLdev = "http://localhost:3123";


export function LocationsRequest(){
  const LocReq = axios(`${URLdev}/encounters`)
  .then(function(res){
    return res.data;
  })
  .catch(function(error){
    console.error(error);
  });

  return {
    type:'LOCATIONS',
    payload: LocReq
  }
}

export function LocationRequest(encounter_id){

  const LocReq = axios(`${URLdev}/encounters`, { params : {encounter_id} })
  .then(function(res){
    return res.data[0];
  })
  .catch(function(error){
    console.error(error);
  });

  return {
    type:'LOCATION',
    payload: LocReq
  }
}

export function LocationsByIdRequest(species_id){
  const LocReqById = axios(`${URLdev}/encounters`, { params : {species_id} })
  .then(function(res){
    return res.data;
  })
  .catch(function(error){
    console.error(error);
  })

  return {
    type:'LOCATIONSBYID',
    payload: LocReqById
  }
}
