import styled from "styled-components";
import { color } from "../styles/Theme";

export const Btn = styled.a`
  background-color: ${props => (props.white ? color.white : color.black)};
  color: ${color.red};
  :hover {
    background-color: ${color.red};
    color: ${color.white};
  }
`;
