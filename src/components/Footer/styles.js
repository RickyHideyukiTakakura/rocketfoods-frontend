import { keyframes, styled } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 2.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.2rem;
  }

  animation: ${slideUp} 0.5s ease-in;
`;
