import React, { Component } from 'react';
import MyMapComponent from '../widgets/map/Map';
import FilterBoard from '../widgets/filter_board/FilterBoard';
import styles from './styles.css';
import { LocationsRequest, LocationsByIdRequest } from '../../actions';

import { connect } from 'react-redux';

class Home extends Component {

  state = {
    locations:[]
  }

  componentWillMount(){
    this.props.getLocations();
    //console.log(this.props);
  }

  clicked(speciesName){
    console.log(speciesName);
  }

  filterSpecies = (species_id) => {
    fetch('http://localhost:3004/locations')
    .then(function(res){
      return res.json();
    })
    .then((allLocations)=>{
      const locations = allLocations.filter(function(location){
        return location.encounter_species_id == species_id;
      })
      this.setState({locations});
    })
    .catch(function(error){
      console.error(error);
    })


  }

  render() {
    console.log(this);
    return (
      <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.innerinner}>
              <MyMapComponent
                markers={this.props.data.locations }
                clickMarker={this.clicked}
              />
            </div>
          </div>
          <div className={styles.elementHello} >
            <FilterBoard
              speciesChange={this.filterSpecies}
            />
          </div>
      </div>
    );
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

  }
}

export default connect(MapStateToProps,mapDispatchToProps)(Home);
