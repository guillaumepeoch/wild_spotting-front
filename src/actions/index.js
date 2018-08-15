const URLdev = "http://localhost:3004";
//const { Url } = require('url');

export function LocationsRequest(){
  const LocReq = fetch(`${URLdev}/locations`)
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

export function LocationRequest(encounter_id){
  let url = new URL(`${URLdev}/locations`)
  const params = { encounter_id };
  Object.keys(params).forEach(function(key){url.searchParams.append(key, params[key])});
  const LocReq = fetch(url)
  .then(function(res){
    return res.json();
  })
  .then(function(r){
    return r[0];
  })
  .catch(function(error){
    console.error(error);
  })

  return {
    type:'LOCATION',
    payload: LocReq
  }
}

export function LocationsByIdRequest(species_id){
  const LocReqById = fetch(`${URLdev}/locations`)
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
