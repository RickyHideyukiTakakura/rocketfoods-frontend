import { styled } from "styled-components";

export const Home = styled.div`
  height: 100vh;

  main {
    padding-left: 2.4rem;
    padding-bottom: 2.4rem;
  }
`;

export const Banner = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  padding: 3.6rem 2.2rem 2.2rem;
  margin: 4.4rem 1.6rem 6.2rem 3.6rem;

  border-radius: 0.3rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  div {
    margin-left: 15.2rem;

    h3 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  img {
    width: 19rem;
    height: 14.8rem;

    position: absolute;
    top: -30px;
    left: -20px;
  }
`;
