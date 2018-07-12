import React from "react";

export default class Animal extends React.Component {
  render() {
    const animal = this.props.animal;
    return (
      <div key={animal.id}>
        Owner: {animal.ownerName + " "}
        Animal: {animal.animalName}
      </div>
    );
  }
}
