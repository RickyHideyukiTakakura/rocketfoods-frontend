import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginTitle } from "../../components/LoginTitle";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

export function SignIn() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <S.SignIn>
      <img src={LogoImg} alt="Logo do Food Explorer" />

      <S.Form>
        <LoginTitle title="Faça login" />

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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </S.Form>
    </S.SignIn>
  );
}
