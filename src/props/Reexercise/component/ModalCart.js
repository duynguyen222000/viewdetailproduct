import React, { Component } from "react";

class ModalCart extends Component {
  renderCart = () => {
    let { cart } = this.props;
    return cart.map((product, index) => {
      return (
        <tr key={index}>
          <th scope="row">{product.maSP}</th>
          <td>
            <img
              className="img-fluid"
              style={{ width: 50, height: 50 }}
              src={product.hinhAnh}
              alt={product.hinhAnh}
            />{" "}
          </td>
          <td>{product.tenSP}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleAmout(product.maSP, -1);
              }}
            >
              -
            </button>
            {product.soLuong}{" "}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleAmout(product.maSP, +1);
              }}
            >
              +
            </button>
          </td>
          <td>{product.donGia}</td>
          <td>{product.soLuong * product.donGia}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteProduct(product);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div style={{ minWidth: 1000 }} className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Giỏ hàng của bạn
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Mã SP</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCart;
