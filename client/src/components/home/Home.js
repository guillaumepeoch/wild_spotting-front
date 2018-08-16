import React, { Component } from 'react';
import MyMapComponent from '../widgets/map/Map';
import FilterBoard from '../widgets/filter_board/FilterBoard';
import CardInfo from '../widgets/card_info/CardInfo';
import styles from './styles.css';
import { LocationsRequest, LocationsByIdRequest, LocationRequest } from '../../actions';
import { connect } from 'react-redux';

class Home extends Component {

  state = {
    locations:[],
    location:null
  }

  componentWillMount(){
    fetch('http://localhost:3123/yo')
    .then(function(res){
      console.log('YYYYYYOOOOOOO')
      console.log(res.json());
    })
    .catch(function(err){
      console.error(err);
    })
    this.props.getLocations();
  }

  clicked = (encounter_id) => {
    this.props.getLocation(encounter_id);
  }

  filterSpecies = (species_id) => {
    this.props.getLocationsById(species_id);
  }

  getCenterMap = () => {
    if(this.props.data.location){
      return {
        lat:this.props.data.location.encounter_lat,
        lng:this.props.data.location.encounter_lng
      }
    } else {
      return {
        lat:53,
        lng:-119
      }
    }
  }

  getZoom = () => {
    if(this.props.data.location){
      return 10;
    } else {
      return 5;
    }
  }

  render() {
    return (
      <div className={styles.container}>
        { this.props.data.location ?
          <CardInfo
            className={styles.cardinfo}
            location={this.props.data.location}
          /> :
          null
        }
        <div className={styles.mapfiltercontainer}>
            <div className={styles.map}>
              <MyMapComponent
                markers={this.props.data.locations}
                clickMarker={this.clicked}
                center={this.getCenterMap()}
                zoom={this.getZoom()}
              />
            </div>
            <div className={styles.filter} >
              <FilterBoard
                speciesChange={this.filterSpecies}
              />
            </div>
        </div>
      </div>
    )
  }

}

const MapStateToProps = function(state){
  return {
    data:state.locations
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    getLocations:function(){
      dispatch(LocationsRequest());
    },
    getLocationsById:function(species_id){
      dispatch(LocationsByIdRequest(species_id))
    },
    getLocation:function(encounter_id){
      dispatch(LocationRequest(encounter_id))
    }
  }
}

export default connect(MapStateToProps,mapDispatchToProps)(Home);
