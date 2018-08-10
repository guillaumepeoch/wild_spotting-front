import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

const CustomMarker = function({markers, clicked}){
  return markers.map(function(marker,i){
    return <Marker
      key={i}
      position={{lat:marker.encounter_lat, lng:marker.encounter_lng}}
      icon={{
        url:'./bear.png',
        scaledSize:{
          width: 25,
          height: 25
        }
      }}
      onClick={function(){
        return clicked(marker.species_name)
      }}
      />
  });
}

export default CustomMarker;
