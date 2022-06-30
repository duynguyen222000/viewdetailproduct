import React, { Component } from "react";
import CarList from "./CarList";
import ModalCar from "./ModalCar";

class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/images/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/images/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 3,
      name: "silver car",
      img: "./img/images/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 3,
      name: "Steel car",
      img: "./img/images/products/steel-car.jpg",
      price: 4000,
    },
  ];
  state = {
    carDetail: {
      id: 1,
      name: "black car",
      img: "./img/images/products/black-car.jpg",
      price: 1000,
    },
  };
  handleClick = (detail) => {
    this.setState({
      carDetail: {
        id: detail.id,
        name: detail.name,
        img: detail.img,
        price: detail.price,
      },
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center"> Danh Sách Xe</h1>
          <ModalCar carDetail={this.state.carDetail}></ModalCar>
          <CarList
            handleClick={this.handleClick}
            carList={this.products}
          ></CarList>
        </div>
      </>
    );
  }
}
export default ExerciseCarStore;
