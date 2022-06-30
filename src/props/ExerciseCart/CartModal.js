import React, { Component } from "react";

class CartModal extends Component {
  spGioHang = () => {
    let { gioHang } = this.props;
    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.maSP}</th>
          <td>
            <img
              style={{ width: 40, height: 40 }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, -1);
              }}
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, 1);
              }}
              className="btn btn-danger"
            >
              +
            </button>
          </td>
          <td>{item.donGia}</td>
          <td>{item.donGia * item.soLuong}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  tongTien = () => {
    let { gioHang } = this.props;
    return gioHang.reduce((total, sp) => {
      return (total += sp.soLuong * sp.donGia).toLocaleString();
    }, 0);
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ minWidth: 1000 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
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
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Hình ảnh</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Đơn giá</th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.spGioHang()}</tbody>
                  <tfoot>Tổng tiền:{this.tongTien()}</tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
