import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

class ExerciseCart extends Component {
  state = {
    gioHang: [],
  };
  themGioHang = (spGioHang) => {
    let sanPham = {
      maSP: spGioHang.maSP,
      hinhAnh: spGioHang.hinhAnh,
      tenSP: spGioHang.tenSP,
      soLuong: 1,
      donGia: spGioHang.giaBan,
    };

    let index = this.state.gioHang.findIndex((sp) => sp.maSP === sanPham.maSP);
    console.log(index);
    if (index !== -1) {
      this.state.gioHang[index].soLuong += 1;
    } else {
      this.state.gioHang.push(sanPham);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };
  total = () => {
    return this.state.gioHang.reduce((a, b) => a + b.soLuong, 0);
  };
  xoaGioHang = (maSP) => {
    console.log(maSP);
    let index = this.state.gioHang.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };
  tangGiamSoLuong = (maSP, number) => {
    let gioHang = [...this.state.gioHang];
    let index = gioHang.findIndex((item) => item.maSP === maSP);
    if (index !== -1) {
      if (gioHang[index].soLuong < 1 && number === -1) {
        alert("error");
        return;
      }
      gioHang[index].soLuong += number;
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">Bài Tập Giỏ Hàng</h3>
        <div
          type="button"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-cart-plus"></i>({this.total()}) Giỏ Hàng
        </div>
        <CartModal
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        ></CartModal>
        <ProductListEXC themGioHang={this.themGioHang}></ProductListEXC>
      </div>
    );
  }
}

export default ExerciseCart;
