import React, { Component } from 'react';
import MyMapComponent from '../MyMapComponent';

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

  render() {
    return (
      <div>
        <MyMapComponent
          markers={this.state.locations}
          clickMarker={this.clicked}
        />
      </div>
    );
  }

}

export default Home;
// AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA
