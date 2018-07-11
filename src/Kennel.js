import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import LocationList from "./LocationList";
import AnimalList from "./AnimalList";

export default class Kennel extends Component {
  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
      { id: 1, name: "Nashville North" },
      { id: 2, name: "Nashville South" }
    ],
    animals: [
      { id: 1, name: "Doodles" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Angus" },
      { id: 4, name: "Henley" },
      { id: 5, name: "Derkins" },
      { id: 6, name: "Checkers" }
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
      { id: 1, animalId: 2, ownerId: 2 },
      { id: 1, animalId: 3, ownerId: 1 },
      { id: 1, animalId: 4, ownerId: 6 },
      { id: 1, animalId: 5, ownerId: 5 },
      { id: 1, animalId: 6, ownerId: 5 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList
          animals={this.state.animals}
          owners={this.state.owners}
          animalOwners={this.state.animalOwners}
        />
      </React.Fragment>
    );
  }
}
