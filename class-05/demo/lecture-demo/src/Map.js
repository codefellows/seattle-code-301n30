import React from "react";
import mapImg from "./imgs/map.png"

class Map extends React.Component{
  render(){
    return(
        <img src={mapImg} alt="seattle" height={250}/>
    )
  }
}

export default Map;