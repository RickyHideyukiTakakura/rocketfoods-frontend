import LogoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginTitle } from "../../components/LoginTitle";
import * as S from "./styles";

export function SignIn() {
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
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
        </div>

        <Button title="Entrar" />

        <a href="/">Criar uma conta</a>
      </S.Form>
    </S.SignIn>
  );
}
