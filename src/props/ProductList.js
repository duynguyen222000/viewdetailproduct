import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="text-center">Shoes Shop</div>
        <div className="row">
          {this.props.dataJson.map((item, index) => {
            return <ProductItem key={index} dataItem={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
