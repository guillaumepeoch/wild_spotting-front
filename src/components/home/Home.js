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
    this.props.getLocations();
  }

  clicked = (encounter_id) => {
    this.props.getLocation(encounter_id);
  }

  filterSpecies = (species_id) => {
    this.props.getLocationsById(species_id);
  }

  render() {
    return (
      <div className={styles.container}>
        { this.props.data.location ? <CardInfo className={styles.cardinfo} location={this.props.data.location} /> : null }
        <div className={styles.mapfiltercontainer}>
            <div className={styles.map}>
              <MyMapComponent
                markers={this.props.data.locations}
                clickMarker={this.clicked}
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
