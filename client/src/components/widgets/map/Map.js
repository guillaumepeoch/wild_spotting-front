import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from './custom_marker/CustomMarker';
import styles from './styles.css';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100px` }} />,
    containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `300px`, border: `4px solid black`}} />,
  }),
  withScriptjs,
  withGoogleMap
)(function(props){
  return(
    <GoogleMap
      zoom={5}
      center={props.center}
    >
      <CustomMarker
        markers={props.markers}
        clicked={props.clickMarker}
      />
    </GoogleMap>
  )
})


MyMapComponent.defaultProps = {
  markers:[]
}

export default MyMapComponent;
