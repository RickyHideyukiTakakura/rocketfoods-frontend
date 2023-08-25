import { styled } from "styled-components";

export const Section = styled.section`
  margin-bottom: 2.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1.6rem;

  overflow-x: auto;
`;
