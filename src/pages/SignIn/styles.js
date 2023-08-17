import { styled } from "styled-components";

export const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  img + label {
    margin-top: 7.2rem;
  }

  label + div {
    margin-top: 0.8rem;
  }

  div + label {
    margin-top: 3.2rem;
  }

  button {
    margin: 3.2rem 0;
  }

  a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;
  }
`;
