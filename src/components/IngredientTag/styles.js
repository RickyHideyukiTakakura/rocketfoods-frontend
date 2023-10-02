import styled from "styled-components";

export const IngredientTag = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.DARK_1000};

  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;

  font-size: 1.4rem;
  font-weight: 500;
`;
