import { keyframes, styled } from "styled-components";

const dishFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  min-width: 30rem;

  margin-top: 2.4rem;
  padding: 6.6rem 4.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  animation: ${dishFadeIn} 0.5s ease forwards;

  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  p:first-of-type {
    font-size: 1.8rem;
    font-weight: 700;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  small {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  small + p {
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 2.4rem;
    height: 2.4rem;
  }

  img + button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }

  div + button {
    padding: 0.4rem 6rem;
    margin-top: 0.4rem;
    border-radius: 0.5rem;
    border: 0;

    width: 100%;
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &:hover {
    scale: 1.1;
    filter: brightness(1.2);
  }
`;
