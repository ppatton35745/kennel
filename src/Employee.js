import React from "react";

export default class Employee extends React.Component {
  render() {
    const employee = this.props.employee;
    return <div key={employee.id}>{employee.name}</div>;
  }
}
