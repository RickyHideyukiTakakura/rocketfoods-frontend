import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { HeaderDesktop } from "../HeaderDesktop";
import { HeaderMobile } from "../HeaderMobile";
import * as S from "./styles";

export function Header({ onSearchChange }) {
  const { windowWidth, screenResponsiveWidth } = useWindowWidth();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <S.Header>
      {windowWidth <= screenResponsiveWidth ? (
        <HeaderMobile
          handleSignOut={handleSignOut}
          onSearchChange={onSearchChange}
        />
      ) : (
        <HeaderDesktop
          handleSignOut={handleSignOut}
          onSearchChange={onSearchChange}
        />
      )}
    </S.Header>
  );
}
