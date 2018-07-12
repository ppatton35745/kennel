import React from "react";

export default class Location extends React.Component {
  render() {
    const location = this.props.location;
    return <div key={location.id}>{location.name}</div>;
  }
}
