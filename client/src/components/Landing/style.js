import styled from "styled-components";
import { color } from "../../styles/Theme";
import { moveInLeft, moveInRight } from "../../styles/Keyframes";

import HeroImg from "../../images/hero.jpg";

export const HeroStyle = styled.div`
  position: relative;
  height: 95vh;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  &::after {
    background-color: ${color.darkgrey};
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const HeadingPrimary = styled.h1`
  color: ${color.white};
  text-transform: uppercase;

  backface-visibility: hidden;
`;
export const HeadMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 4rem;
  line-height: 1.5;

  animation: ${moveInLeft} 1s ease-out;
`;
export const HeadSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  padding: 1rem 0;
  color: ${color.red};

  animation: ${moveInRight} 1s ease-out;
`;
