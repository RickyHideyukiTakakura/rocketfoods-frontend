import { styled } from "styled-components";

export const IngredientItem = styled.div`
  display: inline-block;
  align-items: center;

  background: ${({ theme, $isnew }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  border-radius: 0.8rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: auto;
    padding: 0.8rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
