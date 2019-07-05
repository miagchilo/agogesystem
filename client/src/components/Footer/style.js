import styled from "styled-components";
import { color } from "../../styles/Theme";

export const FooterStyle = styled.div`
  background: ${color.black};
  font-size: 1.4rem;
  padding-top: 4rem;
  .fab {
    font-size: 4rem;
  }
  ul {
    display: flex;
    li {
      &:link,
      &:visited {
        color: ${color.white};
        text-decoration: none;
        text-transform: uppercase;
      }
      &:hover,
      &:active {
        color: ${color.red};
        box-shadow: 0 1rem 2rem ${color.black};
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
  .emailbox {
    margin-top: 3rem;
    .email {
      margin-left: 0.5rem;
    }
  }
  .logo-box {
    .footer_logo {
      width: 10rem;
      height: auto;
    }
  }
  .footer-copyright a {
    color: ${color.red};
  }
`;
