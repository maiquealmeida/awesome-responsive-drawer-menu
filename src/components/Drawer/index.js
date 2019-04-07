import React, { Component } from "react";

import { Container, Button } from "./styles";

export default class Drawer extends Component {
  static defaultProps = {
    open: false
  };

  render() {
    return (
      <Container open={this.props.open}>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>{" "}
      </Container>
    );
  }
}
