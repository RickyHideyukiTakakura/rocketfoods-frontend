import { styled } from "styled-components";

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
`;
