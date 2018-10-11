/* global React ReactDOM */

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleClickTitle() {
    alert("You clicked this!!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleClickTitle },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "havanese"
      }),
      React.createElement(Pet, {
        name: "Michi",
        animal: "Cat",
        breed: "Calico"
      }),
      React.createElement(Pet, {
        name: "Dana",
        animal: "Pig",
        breed: "Mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
