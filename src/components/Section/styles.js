import { styled } from "styled-components";

export const Section = styled.section`
  margin-bottom: 2.4rem;

  position: relative;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: 500;
  }

  & > button {
    display: flex;
    background: transparent;
    border: none;

    & > svg {
      display: flex;
      width: 4rem;
      height: 4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  h2 + button {
    position: absolute;
    z-index: 1;
    top: 200px;
    left: 0;
  }

  button + button {
    position: absolute;
    z-index: 1;
    top: 200px;
    right: 0;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  gap: 1.6rem;

  overflow-x: auto;
`;
