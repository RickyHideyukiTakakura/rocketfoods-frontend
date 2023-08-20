import LogoImg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginTitle } from "../../components/LoginTitle";
import * as S from "./styles";

export function SignUp() {
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
          />
        </div>

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

        <a href="/">Já tenho uma conta</a>
      </S.Form>
    </S.SignIn>
  );
}
