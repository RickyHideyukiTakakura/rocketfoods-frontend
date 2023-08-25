import LogoImage from "../../assets/logo-footer.svg";
import * as S from "./styles";

export function Footer() {
  return (
    <S.Footer>
      <img src={LogoImage} alt="Logo cinza" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </S.Footer>
  );
}
