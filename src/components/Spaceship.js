// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <div className = "name">
          <h2> My name is {this.props.name} </h2>
        </div>
        <div className = "speed" >
          <h2> I am a {this.props.speed} ship </h2>
          </div>
        <div className = "hasRockets" >
          <h2> I have {(this.props.rockets)? "I have rockets" : "I don't have rockets"} </h2>
          </div>
        <div className = "colors">
          <h2> My colors are {this.props.colors} </h2>
          </div>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black","red"]
}

export default Spaceship
