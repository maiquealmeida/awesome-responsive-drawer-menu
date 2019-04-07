import React from "react";

import { Container, Logo, Spacer, Items, DrawerToggle } from "./styles";

const Toolbar = props => (
  <Container>
    <nav>
      <div>
        <DrawerToggle onClick={props.drawerClickHandler}>
          <div />
          <div />
          <div />
        </DrawerToggle>
      </div>
      <Logo>
        <a href="/">LOGO</a>
      </Logo>
      <Spacer />
      <Items>
        <ul>
          <li>
            <a href="/">Menu 1</a>
          </li>
          <li>
            <a href="/">Menu 2</a>
          </li>
        </ul>
      </Items>
    </nav>
  </Container>
);

export default Toolbar;
