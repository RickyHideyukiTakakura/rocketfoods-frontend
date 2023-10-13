import styled from "styled-components";

export const ButtonReturn = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-start;

  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  span {
    font-size: 2.4rem;
    font-family: "Poppins";
    font-weight: 500;
  }
`;
