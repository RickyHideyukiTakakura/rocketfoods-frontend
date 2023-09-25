import { PiReceipt } from "react-icons/pi";
import { RiLogoutBoxRLine, RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logoAdminImage from "../../assets/logo-admin.svg";
import logoCustomerImage from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/role";
import { Input } from "../Input";
import * as S from "./styles";

export function HeaderDesktop({ handleSignOut }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleNavigateToNewDish() {
    navigate("/new");
  }

  return (
    <S.HeaderDesktop>
      {user.role === USER_ROLE.ADMIN ? (
        <img src={logoAdminImage} alt="Logo Administrador do Food Explorer" />
      ) : (
        <img src={logoCustomerImage} alt="Logo Customer do Food Explorer" />
      )}
      <Input
        icon={RiSearchLine}
        type="text"
        placeholder="Busque por pratos ou ingredientes"
      />
      {user.role === USER_ROLE.ADMIN ? (
        <button onClick={handleNavigateToNewDish}>
          <span>Novo prato</span>
        </button>
      ) : (
        <button>
          <PiReceipt />
          <span>Pedidos (0)</span>
        </button>
      )}

      <button onClick={handleSignOut}>
        <RiLogoutBoxRLine />
      </button>
    </S.HeaderDesktop>
  );
}
