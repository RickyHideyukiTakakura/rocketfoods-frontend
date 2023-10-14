import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Menu = styled.div`
  display: none;

  height: 100vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  animation: ${fadeIn} 0.5s ease-in;

  > div:first-child {
    background: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    gap: 1.6rem;

    padding: 5.6rem 2.8rem 2.4rem;

    span {
      font-family: "Roboto", sans-serif;
      font-size: 2rem;
    }
  }

  div + div {
    background: ${({ theme }) => theme.COLORS.DARK_400};

    padding: 3.6rem 2.8rem 1.2rem;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    button {
      font-size: 2.4rem;
      font-weight: 400;

      margin-top: 3.6rem;

      padding: 1rem 0 1rem 1rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
