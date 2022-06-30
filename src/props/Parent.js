import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  name = "Nguyễn Đức Duy";
  render() {
    return (
      <div>
        <Child name={this.name}></Child>
      </div>
    );
  }
}

export default Parent;
