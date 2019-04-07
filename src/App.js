import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Drawer from "./components/Drawer";
import Toolbar from "./components/Toolbar";
import Backdrop from "./components/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    console.tron.log(`Clique handler`);
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

        <Drawer open={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default App;
