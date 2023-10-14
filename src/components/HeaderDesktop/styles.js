import { styled } from "styled-components";

export const HeaderDesktop = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  padding: 2.8rem 12.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  img {
    height: 3rem;
  }

  input {
    text-align: center;
  }

  div + button {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding: 1.2rem 4.8rem;
    border: none;
    border-radius: 0.5rem;

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  button + button {
    display: flex;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;
