import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleClickTitle() {
    alert("You clicked this!!");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClickTitle}>Adopt Me!!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Coco" animal="Cat" breed="Persian" />
        <Pet name="Deedee" animal="Pig" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
