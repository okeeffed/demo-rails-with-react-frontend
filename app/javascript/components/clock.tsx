import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return <div>Hello, Rails 7!</div>;
};

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("clock");
  ReactDOM.render(<App />, rootEl);
});
