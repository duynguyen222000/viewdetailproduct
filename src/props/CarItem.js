import React, { Component } from "react";

class CarItem extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card p-2" style={{ width: "18rem" }}>
          <img
            src={this.props.detail.img}
            className="card-img-top"
            alt={this.props.detail.img}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.detail.name}</h5>
            <h5 className="card-title">Price:{this.props.detail.price}</h5>
            <button
              onClick={() => {
                this.props.detailClick(this.props.detail);
              }}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarItem;
