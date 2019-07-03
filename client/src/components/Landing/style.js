import styled from "styled-components";
import { color } from "../../styles/Theme";
import { moveInLeft, moveInRight } from "../../styles/Keyframes";

import HeroImg from "../../images/hero.jpg";
import SecImg from "../../images/section.jpg";

import dan from "../../images/dan.jpg";
import ryan from "../../images/ryan.jpg";
import reichmond from "../../images/bobong.jpeg";

export const HeroStyle = styled.div`
  position: relative;
  height: 95vh;
  /* background-image: url(${HeroImg}); */
  background-size: cover;
  background-position: top;

  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;
export const VideoStyle = styled.video`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  object-fit: cover;
  height: 100%;
  opacity: 0.9;
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

  text-shadow: 1px 5px 6px rgba(0, 0, 0, 0.91);
  animation: ${moveInRight} 1s ease-out;
`;

export const MainContent = styled.main`
  background-color: ${color.lightGrey};
  padding: 20rem 0;
  margin-top: -20vh;

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${color.red};
    letter-spacing: 0.5rem;
    padding: 0 1rem 2rem;
    font-family: "Montserrat", sans-serif;
  }
  p {
    color: ${color.black};
    font-weight: 400;
    font-size: 2rem;
    padding: 1rem;
    font-family: "Crimson Text";
    text-shadow: 6px 2px 2px rgba(0, 0, 0, 0.1);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    padding-top: 2rem;
    li {
      list-style: none;
      display: inline-block;
      padding: 0 40px 0 30px;
      vertical-align: top;
      color: ${color.red};
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;

export const SectionClient = styled.div`
  padding: 20rem 0;
  background-image: url(${SecImg});
  background-size: cover;
  /* background-position: top; */
  background-color: rgba(#fff, 0.8);
  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
  .box {
  }
`;

export const Client = styled.div`
  background-color: rgba(225, 225, 225, 0.9);
  height: 50rem;
  font-size: 1.5rem;
  padding: 2.5rem;
  margin: 2rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(#fff, 0.1);
  transition: all 0.8s;

  perspective: 150rem;
  -moz-perspective: 150rem;
  h3 {
    letter-spacing: 0.5rem;
    color: ${color.red};
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${color.black};
    /* text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 5rem;
    line-height: 2; */
  }
  :hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
  .img-circle {
    width: 200px;
    height: 200px;
    background-size: cover;
    display: block;
    border-radius: 100px;
    margin: 0 auto;
  }
  .dan {
    background-image: url(${dan});
  }
  .ryan {
    background-image: url(${ryan});
  }
  .reichmond {
    background-image: url(${reichmond});
  }
`;

export const SectionPricing = styled.div`
  background-color: ${color.lightGrey};
  padding: 15rem 0;

  .story {
    width: 75%;
    margin: 0 auto;
  }
`;
