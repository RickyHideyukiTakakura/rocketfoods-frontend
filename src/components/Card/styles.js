import { styled } from "styled-components";

export const Card = styled.button`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  margin-top: 2.4rem;
  padding: 6.6rem 4.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  p:first-of-type {
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p + p {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 2.4rem;
    height: 2.4rem;
  }

  a {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    span {
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    button {
      display: flex;
      border: none;
      background: transparent;
    }
  }

  div + button {
    padding: 0.4rem 6rem;
    border-radius: 0.5rem;
    margin-top: 0.4rem;
  }

  &:hover {
    scale: 1.1;
    filter: brightness(1.2);
  }
`;
