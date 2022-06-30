import React, { Component } from "react";
import DanhSachSanPham from "./props/DanhSachSanPham";
import ExerciseCarStore from "./props/ExerciseCarStore";
import ExerciseCart from "./props/ExerciseCart/ExerciseCart";
import Home from "./props/Reexercise/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        {/* <ExerciseCart></ExerciseCart> */}
        {/* <ExerciseCarStore></ExerciseCarStore> */}
      </div>
    );
  }
}

export default App;
