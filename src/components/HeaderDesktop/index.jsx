import { PiReceipt } from "react-icons/pi";
import { RiLogoutBoxRLine, RiSearchLine } from "react-icons/ri";
import LogoImage from "../../assets/logo.svg";
import { Input } from "../Input";
import * as S from "./styles";

export function HeaderDesktop() {
  return (
    <S.HeaderDesktop>
      <img src={LogoImage} alt="Logo do Food Explorer" />
      <Input
        icon={RiSearchLine}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
      <button>
        <PiReceipt />
        <span>Pedidos (0)</span>
      </button>

      <button>
        <RiLogoutBoxRLine />
      </button>
    </S.HeaderDesktop>
  );
}
