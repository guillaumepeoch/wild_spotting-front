import React, { Component } from 'react';

class FilterBoard extends Component {

  state = {
    species:[]
  }

  componentWillMount(){
    fetch('http://localhost:3004/species')
    .then(function(res){
        return res.json();
    })
    .then((r)=>{
      this.setState({
        species:r
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
      <select onChange={(e)=>this.speciesSelected(e)}>
        {this.state.species.map((specie,i)=>(
          <option
            key={i}
            value={specie.species_id}
          >
            {specie.species_name}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.getDropdown()};
      </div>
    );
  }

}

export default FilterBoard;
