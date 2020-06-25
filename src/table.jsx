import React, { Component } from "react";

/*
// Folowing is class component
//creating table component
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actrees</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
 */

//Simple Components
// Table header component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

// table body component
const TableBody = () => {
  return <tbody />;
};

class Table extends Component {
  render() {
    return (
      <table>
        {/* // two simple comonents are added
        nested components inside table html tag */}
        <TableHeader />
        <TableBody charactersData={charactersData} />
      </table>
    );
  }
}

export default Table;
