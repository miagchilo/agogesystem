import styled from "styled-components";
import { color } from "../styles/Theme";

export const Btn = styled.a`
  background-color: ${props => (props.white ? color.white : color.red)};
  color: ${props => (props.white ? color.red : color.white)};
  :hover {
    background-color: ${props => (props.white ? color.red : color.white)};
    color: ${props => (props.white ? color.white : color.red)};
  }
`;
