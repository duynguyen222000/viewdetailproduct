import React, { Component } from "react";

class ItemProduct extends Component {
  render() {
    let { product } = this.props;
    return (
      <>
        <div style={{ border: "none" }} className="card text-white bg-primary">
          <img
            style={{ minWidth: 354, minHeight: 354 }}
            className="card-img-top"
            src={product.hinhAnh}
            alt={product.hinhAnh}
          />
          <div className="card-body text-dark bg-light">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan.toLocaleString()}</p>
            <div>
              <button
                onClick={() => {
                  this.props.addProduct(product);
                }}
                type="button"
                class="btn btn-outline-success w-50"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  this.props.viewDetail(product);
                }}
                type="button"
                class="btn btn-outline-info w-50"
              >
                View detail
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemProduct;
