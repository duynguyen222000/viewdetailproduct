import React, { Component } from "react";
import ItemProduct from "./ItemProduct";

class ListProduct extends Component {
  renderItemProduct = () => {
    let { productsArray, viewDetail } = this.props;
    return productsArray.map((product, index) => {
      return (
        <div key={index} className="col-md-4">
          <ItemProduct
            addProduct={this.props.addProduct}
            viewDetail={viewDetail}
            product={product}
          ></ItemProduct>
        </div>
      );
    });
  };
  render() {
    return <>{this.renderItemProduct()}</>;
  }
}

export default ListProduct;
