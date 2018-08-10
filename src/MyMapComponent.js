import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from './CustomMarker';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `300px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(function(props){
  return(
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 53, lng: -119 }}
  >
    <CustomMarker markers={props.markers} clicked={props.clickMarker} />
  </GoogleMap>)
})

export default MyMapComponent;
