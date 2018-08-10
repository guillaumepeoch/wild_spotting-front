import React, { Component } from 'react';
import MyMapComponent from '../MyMapComponent';
import styles from './styles.css';

class Home extends Component {

  state = {
    locations:[]
  }

  componentWillMount(){
    console.log(styles);
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
      <div style={{display: 'flex',
          background: 'green'
      }}>


          <div style={{position:'relative',flex:2}}>

            <div style={{position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0}}>


            <MyMapComponent
              markers={this.state.locations}
              clickMarker={this.clicked}
            />

            </div>

          </div>

          <div style={{background:'green',flex:1}} >
            Hello
          </div>
      </div>
    );
  }

}

export default Home;
// AIzaSyCfHpMqBP1f10sqeHBm2RTsYUzW2A536jA

// <MyMapComponent
//   markers={this.state.locations}
//   clickMarker={this.clicked}
// />
