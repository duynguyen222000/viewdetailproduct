import React, { Component } from "react";
import CarItem from "./CarItem";

class CarList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {this.props.carList.map((item, index) => {
            return (
              <CarItem
                detailClick={this.props.handleClick}
                key={index}
                detail={item}
              ></CarItem>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarList;
