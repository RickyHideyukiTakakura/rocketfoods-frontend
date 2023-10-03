import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";
import { Link } from "react-router-dom";
import logoAdminImage from "../../assets/logo-admin.svg";
import logoCustomerImage from "../../assets/logo.svg";
import { Menu } from "../../components/Menu";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/role";
import * as S from "./styles";

export function HeaderMobile({ handleSignOut, onSearchChange }) {
  const { user } = useAuth();
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
          onSearchChange={onSearchChange}
          styles={toggleMenu}
        />
      ) : (
        <button onClick={handleOpenMenu}>{<FiMenu />}</button>
      )}

      {user.role === USER_ROLE.ADMIN ? (
        <Link to="/">
          <img src={logoAdminImage} alt="Logo Admin do Food Explorer" />
        </Link>
      ) : (
        <Link to="/">
          <img src={logoCustomerImage} alt="Logo Customer do Food Explorer" />
        </Link>
      )}

      {user.role === USER_ROLE.ADMIN ? (
        <div></div>
      ) : (
        <Link to="/">
          <PiReceipt />
        </Link>
      )}
    </S.HeaderMobile>
  );
}
