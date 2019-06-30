import styled from "styled-components";
import { textFocusIn } from "../../styles/Keyframes";
export const LoadingStyle = styled.div`
  position: relative;
  height: 95vh;
  background-size: cover;
  background-position: top;
  background-color: black;
`;
export const DesktopLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 40rem;
    width: 40rem;
    display: block;
    animation: ${textFocusIn} 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`;
export const MobileLoading = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    height: 20rem;
    width: 20rem;
    display: block;
    animation: ${textFocusIn} 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
`;
