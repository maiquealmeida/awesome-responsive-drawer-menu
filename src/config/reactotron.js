import Reactotron from "reactotron-react-js";

console.tron = Reactotron;

console.tron
  .configure() // we can use plugins here -- more on this later
  .connect(); // let's connect!

console.tron.clear();
