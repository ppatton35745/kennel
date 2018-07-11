import React, { Component } from "react";

export default class AnimalList extends Component {
  render() {
    const animals = this.props.animals;
    const owners = this.props.owners;
    const animalOwners = this.props.animalOwners;

    const ownerMap = {};
    owners.forEach(function(owner) {
      ownerMap[owner.id] = owner;
    });

    const animalMap = {};
    animals.forEach(function(animal) {
      animalMap[animal.id] = animal;
    });

    animalOwners.forEach(function(animalOwner) {
      animalOwner.ownerName = ownerMap[animalOwner.ownerId]["name"];
      animalOwner.animalName = animalMap[animalOwner.animalId]["name"];
    });

    return (
      <React.Fragment>
        {animalOwners.map(animal => (
          <div>
            Owner: {animal.ownerName + " "}
            Animal: {animal.animalName}
          </div>
        ))}
      </React.Fragment>
    );
  }
}
