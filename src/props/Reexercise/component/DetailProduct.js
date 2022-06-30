import React, { Component } from "react";

class DetailProduct extends Component {
  render() {
    let { detailProduct } = this.props;
    return (
      <>
        <p className="text-center fs-2 text-uppercase ">Product Details</p>
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={detailProduct.hinhAnh}
              alt={detailProduct.hinhAnh}
            />
          </div>
          <div className="col-md-8">
            <p className="fs-3 text-center">Thông số kỹ thuật</p>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Tên sản phẩm</th>
                  <td>{detailProduct.tenSP}</td>
                </tr>
                <tr>
                  <th scope="row">Màn hình</th>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <th scope="row">Hệ điều hành</th>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <th scope="row">Rom</th>
                  <td>{detailProduct.rom}</td>
                </tr>
                <tr>
                  <th scope="row">Ram</th>
                  <td>{detailProduct.ram}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default DetailProduct;
