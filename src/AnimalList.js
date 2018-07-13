import React, { Component } from "react";
import Animal from "./Animal";

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Doodles", breed: "German Shepherd" },
      { id: 2, name: "Jack", breed: "Cocker Spaniel" },
      { id: 3, name: "Angus", breed: "Dalmatian" },
      { id: 4, name: "Henley", breed: "Carolina Retriever" },
      { id: 5, name: "Derkins", breed: "Pug" },
      { id: 6, name: "Checkers", breed: "Bulldog" }
    ],
    owners: [
      { id: 1, name: "Ryan Tanay" },
      { id: 2, name: "Emma Beaton" },
      { id: 3, name: "Dani Adkins" },
      { id: 4, name: "Adam Oswalt" },
      { id: 5, name: "Fletcher Bangs" },
      { id: 6, name: "Angela Lee" }
    ],
    animalOwners: [
      { id: 1, animalId: 1, ownerId: 4 },
      { id: 2, animalId: 2, ownerId: 2 },
      { id: 3, animalId: 3, ownerId: 1 },
      { id: 4, animalId: 4, ownerId: 6 },
      { id: 5, animalId: 5, ownerId: 5 },
      { id: 6, animalId: 6, ownerId: 5 }
    ]
  };

  render() {
    const animals = this.state.animals;
    const owners = this.state.owners;
    const animalOwners = this.state.animalOwners;

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
      animalOwner.animalBreed = animalMap[animalOwner.animalId]["breed"];
    });

    return (
      <React.Fragment>
        {animalOwners.map(animal => <Animal key={animal.id} animal={animal} />)}
      </React.Fragment>
    );
  }
}
