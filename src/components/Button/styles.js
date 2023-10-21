import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  padding: 1.2rem 12.8rem;
  border-radius: 0.8rem;

  font-weight: 500;
  font-size: 1.4rem;
`;
