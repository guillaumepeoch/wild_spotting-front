const URL = "http://localhost:3004";

export function LocationsRequest(){
  const LocReq = fetch(`${URL}/locations`)
  .then(function(res){
    return res.json();
  })
  .then(function(r){
    return r;
  })
  .catch(function(error){
    console.error(error);
  })

  return {
    type:'LOCATIONS',
    payload: LocReq
  }
}



export function LocationsByIdRequest(species_id){
  const LocReqById = fetch(`${URL}/locations`)
  .then(function(res){
    return res.json();
  })
  .then(function(r){
    return r.filter(function(location){
      return location.encounter_species_id == species_id;
    })
  })
  .catch(function(error){
    console.error(error);
  })

  return {
    type:'LOCATIONSBYID',
    payload: LocReqById
  }
}
