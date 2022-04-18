const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me"),
    React.createElement(Pet, { name: "Bruno", animal: "dog", breed: "Kelpie" }),
    React.createElement(Pet, {
      name: "Dusty",
      animal: "cat",
      breed: "Stupid pretty",
    }),
    React.createElement(Pet, { name: "Maggie", animal: "cat", breed: "tabby" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
