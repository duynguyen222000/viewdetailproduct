import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { dataItem } = this.props;
    return (
      <div className="col-md-4 mt-3">
        <div className="card" style={{ width: "18rem", minHeight: "374px" }}>
          <img src={dataItem.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-truncate">{dataItem.name}</h5>
            <button className="btn btn-primary w-100">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
