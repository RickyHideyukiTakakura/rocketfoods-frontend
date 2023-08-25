import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import LogoImage from "../../assets/logo.svg";
import { Menu } from "../../components/Menu";
import * as S from "./styles";

export function HeaderMobile() {
  return (
    <S.HeaderMobile>
      <Menu />

      <button>{<FiMenu />}</button>
      <a href="#">
        <img src={LogoImage} alt="Logo do Food Explorer" />
      </a>
      <a href="#">
        <PiReceipt />
      </a>
    </S.HeaderMobile>
  );
}
