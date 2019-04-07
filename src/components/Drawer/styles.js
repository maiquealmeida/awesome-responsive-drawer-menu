import styled from "styled-components";

export const Container = styled.nav`
  height: 100%;
  background: white;

  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;

  transform: ${props => (props.open ? `translateX(0)` : `translateX(-100%)`)};
  transition: transform 0.3s ease-out;

  @media (min-width: 769px) {
    display: none;
  }

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ul li {
    margin: 0.5rem 0;
  }

  a {
    color: #521751;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover,
    &:active {
      color: #fa923f;
    }
  }
`;
