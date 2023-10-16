import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginTitle } from "../../components/LoginTitle";
import { api } from "../../services/api";
import * as S from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      verifyInput();

      const userData = {
        name,
        email,
        password,
      };

      await createUser(userData);

      alert("Users signed up successfully");

      navigate(-1);
    } catch (error) {
      handleError(error);
    }
  }

  async function createUser(userData) {
    await api.post("/users", userData);
  }

  function verifyInput() {
    if (!name || !email || !password) {
      throw new Error("Please fill all fields");
    }
  }

  function handleError(error) {
    alert("Error creating user " + error.message);
  }

  return (
    <S.SignIn>
      <img src={LogoImg} alt="Logo do Food Explorer" />

      <S.Form>
        <LoginTitle title="Crie sua conta" />

        <div>
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="mail">Email</label>
          <Input
            id="mail"
            name="mail"
            type="mail"
            placeholder="exemplo@exemplo.com.br"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Button title="Criar" onClick={handleSignUp} />

        <a href="/">Já tenho uma conta</a>
      </S.Form>
    </S.SignIn>
  );
}
