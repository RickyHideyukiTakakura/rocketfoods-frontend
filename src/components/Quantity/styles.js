import { styled } from "styled-components";

export const Quantity = styled.div`
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
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
