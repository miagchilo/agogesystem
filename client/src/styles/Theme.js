import styled from "styled-components";

export const color = {
  white: "#FFFFFF",
  black: "#202020",
  grey: "#E0E7EA",
  lightGrey: "#f7f7f7",
  darkGrey: "#777",
  darkerGrey: "#333",
  blue: "#2660A4;",
  lightblue: "#039be5",
  red: "#990000" //! accent hover link color
};

export const Highlight = styled.span`
  background: ${props => (props.red ? color.red : color.white)};
  color: ${color.white};
`;

export const Underline = styled.span`
  box-shadow: inset 0 -0.08em 0 ${color.red};
`;
