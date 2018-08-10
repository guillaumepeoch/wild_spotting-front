import React, { Component } from 'react';
import MyMapComponent from '../MyMapComponent';
import FilterBoard from '../filter_board/FilterBoard';
import styles from './styles.css';

class Home extends Component {

  state = {
    locations:[]
  }

  componentWillMount(){
    fetch('http://localhost:3004/locations')
    .then(function(res){
      return res.json();
    })
    .then((r)=>{
      this.setState({
        locations:r
      });
    })
    .catch(function(error){
      console.error(error);
    })
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
    return (
      <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.innerinner}>
              <MyMapComponent
                markers={this.state.locations}
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

export default Home;
