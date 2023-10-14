import { keyframes, styled } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  animation: ${slideDown} 0.5s ease-in;
`;
