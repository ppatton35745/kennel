import React, { Component } from "react";
import Location from "./Location";

export default class LocationList extends Component {
  state = {
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" },
      { id: 3, name: "Nashville West" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.locations.map(location => (
          <Location key={location.id} location={location} />
        ))}
      </React.Fragment>
    );
  }
}
