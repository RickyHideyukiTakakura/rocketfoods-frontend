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

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 3.2rem;
    font-weight: 500;
  }

  @media (min-width: 1200px) {
    padding: 4rem 12.4rem 11.6rem;
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
    justify-content: flex-end;
    align-items: center;
    gap: 3.2rem;

    button {
      padding: 1.2rem 3.6rem;

      &:first-child {
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas:
      "image name category"
      "ingredients ingredients price"
      "description description description"
      "undefined undefined button";
  }

  .name {
    grid-area: name;
  }

  .category {
    grid-area: category;
  }

  .ingredients {
    grid-area: ingredients;
  }

  .price {
    grid-area: price;
  }

  .description {
    grid-area: description;
  }

  .button {
    grid-area: button;
  }
`;

export const DishImage = styled.div`
  grid-area: image;

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
