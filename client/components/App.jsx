import React, { Component, Fragment as F } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.google);
    return (
      <F>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      </F>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o"
})(App);
