import LogoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./styles";

export function SignIn() {
  return (
    <S.SignIn>
      <S.Form>
        <img src={LogoImg} alt="Logo do Food Explorer" />

        <label htmlFor="mail">Email</label>
        <Input type="mail" placeholder="exemplo@exemplo.com.br" />

        <label htmlFor="password">Senha</label>
        <Input type="password" placeholder="No mínimo 6 caracteres" />

        <Button title="Entrar" />

        <a href="/">Criar uma conta</a>
      </S.Form>
    </S.SignIn>
  );
}
