import React, { Component } from "react";

class ProductItemEXC extends Component {
  render() {
    let { itemProps } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            style={{ maxHeight: "400px" }}
            className="card-img-top"
            src={itemProps.hinhAnh}
            alt={itemProps.hinhAnh}
          />
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="card-title">{itemProps.tenSP}</h4>
              <p className="card-text">{itemProps.giaBan}</p>
            </div>
            <button
              onClick={() => {
                this.props.themGioHang(itemProps);
              }}
              className="btn btn-primary w-50"
            >
              Add to cart<i className="fa fa-shopping-cart"></i>
            </button>
            <button onClick={() => {}} className="btn btn-success w-50">
              View detail<i class="fa fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItemEXC;
