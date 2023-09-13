import styled from "styled-components";

export const EditDish = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.2rem 3.2rem 5.4rem;

  > button:first-child {
    display: flex;
    align-items: center;
    align-self: flex-start;

    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }

    span {
      font-size: 1.6rem;
      font-family: "Poppins";
      font-weight: 500;
    }
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  label {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    font-size: 1.6rem;
    font-family: "Roboto";
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    select {
      width: 100%;

      display: flex;
      align-items: center;
      padding: 1.6rem 1.4rem;

      background: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border: 0;
      border-radius: 0.8rem;
    }
  }

  label + div {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    button {
      padding: 1.2rem 3.6rem;

      &:first-child {
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }
`;

export const DishImage = styled.div`
  label {
    position: relative;

    div {
      input {
        visibility: hidden;
        opacity: 0;
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    span {
      position: absolute;
      top: 5.4rem;
      left: 5rem;

      font-family: "Poppins";
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.6rem;

  padding: 0.8rem;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.DARK_900};
`;
