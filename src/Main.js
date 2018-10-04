import React, { Component } from 'react';
import { NavBar} from "./Components/NavBar";
import Items  from "./Components/Items";
class Main extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Items />
      </div>
    );
  }
}

export default Main;

