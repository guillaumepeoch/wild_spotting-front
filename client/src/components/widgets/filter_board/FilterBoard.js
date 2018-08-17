import React, { Component } from 'react';
import styles from './styles.css';
import axios from 'axios';

class FilterBoard extends Component {

  state = {
    species:[]
  }

  componentWillMount(){
    axios('http://localhost:3123/species')
    .then((res)=>{
      this.setState({
        species:res.data
      })
    })
    .catch(function(er){
      console.error(er);
    })
  }

  speciesSelected(e){
    this.props.speciesChange(e.target.value);
  }

  getDropdown(){
    return(
      <div className={styles.container}>
        <select defaultValue='selectspecies' onChange={(e)=>this.speciesSelected(e)}>
          <option value='selectspecies'> Select specie </option>
          {this.state.species.map((specie,i)=>(
            <option
              key={i}
              value={specie.species_id}
            >
              {specie.species_name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getDropdown()}
      </div>
    );
  }

}

export default FilterBoard;
