import styled from "styled-components";
import { color } from "../../styles/Theme";

export const Navigation = styled.nav`
  background-color: ${color.black};
  position: fixed;
  z-index: 10000;
  a {
    font-size: 1.6rem;
  }
`;

export const MobileNav = styled.ul`
  width: 100vw;
  background-color: ${color.black};
  .adjustCenter {
    width: 100vh;
    text-align: center;
    .close {
      margin: none;
      position: absolute;
      top: 0;
      right: 0;
      a {
        padding: 0;
      }
      .icon {
        margin: 1rem 2rem;
        font-size: 3rem;
        color: ${color.white};
      }
    }
    li {
      margin-bottom: 1rem;
      a {
        font-size: 3rem;
        color: ${color.white};
      }
    }
  }
`;
