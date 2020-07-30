import React, { Component } from "react";
import {Input, Card, CardBody,CardTitle} from "mdbreact";
import "./style.css";
import employeeList from "./employees.json";

class Search extends Component {
  state = {
    search: ""
  };

  renderEmployee = employee => {
 
  
    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <CardTitle title={employee.name}>
              {employee.name.substring(0, 15)}
              {employee.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };
  onchange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    const filteredEmployees = employeeList.filter(employee => {
      return employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
         
              <div className="col">
                <Input
                  label="Search Employee"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredEmployees.map(employee => {
                return this.renderEmployee(employee);
              })}
            </div>
          </div>
        </main>
  
      </div>
    );
  }
}

export default Search;
