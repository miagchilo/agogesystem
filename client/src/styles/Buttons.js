import styled from "styled-components";
import { color } from "../styles/Theme";
import { moveInBottom } from "./Keyframes";

export const Btn = styled.a`
  background-color: ${props => (props.white ? color.white : color.black)};
  color: ${color.red};
  animation: ${moveInBottom} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
  font-size: 1.6rem;
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    background-color: ${props => (props.white ? color.white : color.black)};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`;
