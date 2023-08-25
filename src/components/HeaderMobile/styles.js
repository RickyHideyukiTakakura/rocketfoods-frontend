import { styled } from "styled-components";

export const HeaderMobile = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.6rem 2.8rem 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  button,
  a + a {
    display: flex;
    border: none;
    background: transparent;
  }

  button + a {
    display: flex;

    img {
      height: 2.6rem;
    }
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
