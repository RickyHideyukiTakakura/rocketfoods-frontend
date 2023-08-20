import { styled } from "styled-components";

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7.2rem;

  height: 100vh;

  @media (min-width: 1048px) {
    flex-direction: row;
    gap: 30rem;

    form {
      background: ${({ theme }) => theme.COLORS.DARK_700};

      padding: 6.4rem;
      border-radius: 1.6rem;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 3.2rem;
        font-weight: 500;

        text-align: center;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.6rem;
    }
  }

  a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;
  }
`;
