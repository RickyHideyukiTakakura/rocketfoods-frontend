import { styled } from "styled-components";

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  margin-top: 2.4rem;
  padding: 2.4rem;

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  svg + p {
    font-size: 1.4rem;
    font-weight: 500;
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

  img + svg {
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
