import React, { Component } from "react";

class SanPham extends Component {
  render() {
    const { detail } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div style={{ maxWidth: "80%" }} className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h1 className="text-center">Thông số kỹ thuật</h1>
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="text-center">{detail.tenSP}</h3>
                    <img
                      style={{ width: "350px" }}
                      src={detail.hinhAnh}
                      alt={detail.hinhAnh}
                    />
                  </div>
                  <div className="col-md-8">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Màn Hình</th>
                          <td>{detail.manHinh}</td>
                        </tr>
                        <tr>
                          <th scope="row">Hệ Điều Hành</th>
                          <td>{detail.heDieuHanh}</td>
                        </tr>
                        <tr>
                          <th scope="row">Camera Trước</th>
                          <td colspan="2">{detail.cameraTruoc}</td>
                        </tr>
                        <tr>
                          <th scope="row">Camera Sau</th>
                          <td colspan="2">{detail.cameraSau}</td>
                        </tr>
                        <tr>
                          <th scope="row">RAM</th>
                          <td colspan="2">{detail.ram}</td>
                        </tr>
                        <tr>
                          <th scope="row">ROM</th>
                          <td colspan="2">{detail.rom}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SanPham;
