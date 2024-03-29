import { styled } from "styled-components";

export const Details = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem 5.6rem 3.2rem;

  img {
    margin: 1.6rem 0;

    width: 26.4rem;
    height: 26.4rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 4.8rem;

    img {
      width: 39rem;
      height: 39rem;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2.4rem;
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 2.4rem;
    }

    > div {
      gap: 1.2rem;
    }
  }
`;

export const Order = styled.div`
  margin-top: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  div {
    span {
      font-size: 2.4rem;
      font-weight: 700;
    }

    svg {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  div + button {
    padding: 0.8rem 4.3rem;
  }
`;
