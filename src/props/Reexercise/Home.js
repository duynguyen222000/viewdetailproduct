import React, { Component } from "react";
import DetailProduct from "./component/DetailProduct";
import ListProduct from "./component/ListProduct";
import ModalCart from "./component/ModalCart";

class Home extends Component {
  productsArray = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    detailProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cart: [],
  };
  viewDetail = (product) => {
    this.setState({
      detailProduct: {
        maSP: product.maSP,
        tenSP: product.tenSP,
        manHinh: product.manHinh,
        heDieuHanh: product.heDieuHanh,
        cameraTruoc: product.cameraTruoc,
        cameraSau: product.cameraSau,
        ram: product.ram,
        rom: product.rom,
        giaBan: product.giaBan,
        hinhAnh: product.hinhAnh,
      },
    });
  };
  addProduct = (product) => {
    let cart = [...this.state.cart];
    console.log(cart);
    let newProduct = {
      maSP: product.maSP,
      hinhAnh: product.hinhAnh,
      tenSP: product.tenSP,
      soLuong: 1,
      donGia: product.giaBan,
    };
    let index = cart.findIndex((maSp) => maSp.maSP === product.maSP);
    console.log(index);
    if (index !== -1) {
      cart[index].soLuong += 1;
    } else {
      cart.push(newProduct);
    }
    this.setState({
      cart: cart,
    });
  };
  deleteProduct = (product) => {
    let cart = [...this.state.cart];
    let index = cart.findIndex((maSp) => product.maSP === maSp.maSP);
    console.log(index);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    this.setState({
      cart: cart,
    });
  };
  totalAmount = () => {
    return this.state.cart.reduce((total, init) => {
      return (total += init.soLuong);
    }, 0);
  };
  handleAmout = (maSP, number) => {
    let cart = [...this.state.cart];
    let index = cart.findIndex((maSp) => maSp.maSP === maSP);
    if (index !== -1 && cart[index].soLuong < 1) {
      return;
    } else {
      cart[index].soLuong += number;
    }
    this.setState({
      cart: cart,
    });
  };
    return (
      <div>
        <div className="container">
          <h2 className="text-center text-uppercase">Home Products</h2>
          <div className="text-end">
            <button
              type="button"
              class="btn btn-primary "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Cart({this.totalAmount()})<i class="fa fa-shopping-cart"></i>
            </button>
          </div>
          <ModalCart
            deleteProduct={this.deleteProduct}
            cart={this.state.cart}
            handleAmout={this.handleAmout}
          ></ModalCart>
          <div className="row">
            <ListProduct
              viewDetail={this.viewDetail}
              productsArray={this.productsArray}
              addProduct={this.addProduct}
            ></ListProduct>
          </div>
          <div className="row">
            <DetailProduct
              detailProduct={this.state.detailProduct}
            ></DetailProduct>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
