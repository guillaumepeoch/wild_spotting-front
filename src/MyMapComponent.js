import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `500px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 53, lng: -119 }}
  >
    { getMarkers(props.markers) }
  </GoogleMap>
)

const getMarkers = function(markers){
  return markers.map(function(marker,i){
    return <Marker key={i} position={{lat:marker.encounter_lat, lng:marker.encounter_lng}} />
  });
}

// AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA

export default MyMapComponent;
