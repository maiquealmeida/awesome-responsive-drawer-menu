import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #521751;
  height: 56px;

  nav {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
  }

  @media (min-width: 769px) {
    div {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  margin-left: 1rem;

  @media (min-width: 769px) {
    margin-left: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const DrawerToggle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

export const Items = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    padding: 0 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: #fa923f;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
