import React, { Component } from 'react';

const Pin = function(props){

  const getLocations = function(locations){
    return locations.map(function(location){
      return <div lat={location.encounter_lat} lng={location.encounter_lng} text={location.encounter_species_id} > Yo</div>
    });
  }

  return (
    <div>
      {getLocations(props.locations)}
    </div>
  );
}

export default Pin;
