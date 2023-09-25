import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import LogoImage from "../../assets/logo.svg";
import { Menu } from "../../components/Menu";
import * as S from "./styles";

export function HeaderMobile({ handleSignOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = {
    display: isMenuOpen ? "block" : "none",
  };

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <S.HeaderMobile>
      {isMenuOpen ? (
        <Menu
          handleSignOut={handleSignOut}
          handleCloseMenu={handleCloseMenu}
          styles={toggleMenu}
        />
      ) : (
        <button onClick={handleOpenMenu}>{<FiMenu />}</button>
      )}

      <a href="#">
        <img src={LogoImage} alt="Logo do Food Explorer" />
      </a>
      <a href="#">
        <PiReceipt />
      </a>
    </S.HeaderMobile>
  );
}
