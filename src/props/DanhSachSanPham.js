import React, { Component } from "react";
import SanPham from "./SanPham";

class DanhSachSanPham extends Component {
  mangSanPham = [
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
  };
  handleProduct = (item) => {
    this.setState({
      detailProduct: {
        maSP: item.maSP,
        tenSP: item.tenSP,
        manHinh: item.manHinh,
        heDieuHanh: item.heDieuHanh,
        cameraTruoc: item.cameraTruoc,
        cameraSau: item.cameraSau,
        ram: item.ram,
        rom: item.rom,
        giaBan: 5700000,
        hinhAnh: item.hinhAnh,
      },
    });
  };
  renderProducts = () => {
    return this.mangSanPham.map((item, index) => {
      return (
        <div key={index} className="col-md-4">
          <div
            style={{ minHeight: "450px", padding: "10px" }}
            className="card text-left"
          >
            <img
              style={{ width: "90%" }}
              className="card-img-top"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenSP}</h4>

              <button
                onClick={() => {
                  this.handleProduct(item);
                }}
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Launch demo modal
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.renderProducts()}</div>
        <SanPham detail={this.state.detailProduct}></SanPham>
      </div>
    );
  }
}

export default DanhSachSanPham;
