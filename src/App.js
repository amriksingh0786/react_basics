const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Danish", animal: "Dog", breed: "Mixed" }),
    React.createElement(Pet, { name: "Paada", animal: "Human", breed: "NA" }),
    React.createElement(Pet, { name: "Rani", animal: "Goat", breed: "Mixed" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
