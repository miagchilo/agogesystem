import { keyframes } from "styled-components";

export const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

export const textFocusIn = keyframes`
    0% {
        -webkit-filter: blur(12px);
                filter: blur(12px);
        opacity: 0;
    }
    100% {
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
    }
}
`;
