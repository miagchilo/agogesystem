import styled from "styled-components";
import { color } from "../../styles/Theme";
import HeroImg from "../../images/HeroImg.jpg";
import { device } from "../../styles/Media";
export const CoachingStyle = styled.div`
  p {
    color: red;
  }
`;
export const CoachingIntro = styled.div`
  position: relative;
  height: 100vh;
  .hero::before {
    background-image: url(${HeroImg});
    background-size: cover;
    background-position: top;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.4;
  }
  .hero::after {
    background-color: ${color.black};
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.9;
  }
`;
export const TextBox = styled.div`
  position: absolute;
  top: 10%;
  @media ${device.tablet} {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    margin: 3rem;
  }
  .head {
    color: ${color.red};
    font-size: 3rem;
  }
  .sub {
    color: ${color.white};
    font-size: 2rem;
    font-size: 700;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .desc {
    color: ${color.white};
    font-size: 2.5rem;
    text-align: center;
    margin: 0 2rem;
    @media ${device.mobileLmax} {
      margin-bottom: 5rem;
    }
    @media ${device.mobileSmax} {
      display: none;
    }
  }
  .desc-sub {
    color: ${color.white};
    font-size: 2rem;
    text-align: center;
    margin: 2rem 2rem 5rem;
    @media ${device.mobileLmax} {
      display: none;
    }
  }
  .scroll {
    display: block;
    margin: 0 auto;
    background-color: ${color.red};
  }
`;
