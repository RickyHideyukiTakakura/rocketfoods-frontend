import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/role";
import { Footer } from "../Footer";
import { Input } from "../Input";
import * as S from "./styles";

export function Menu({
  handleSignOut,
  handleCloseMenu,
  onSearchChange,
  styles,
}) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleNavigateToNewDish() {
    navigate("/new");
  }

  return (
    <S.Menu style={styles}>
      <div>
        <button onClick={handleCloseMenu}>
          <RiCloseLine />
        </button>
        <span>Menu</span>
      </div>

      <div>
        <Input
          type="text"
          icon={RiSearchLine}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(event) => onSearchChange(event.target.value)}
        />

        {user.role === USER_ROLE.ADMIN && (
          <button onClick={handleNavigateToNewDish}>Novo prato</button>
        )}

        <button onClick={handleSignOut}>Sair</button>
      </div>

      <Footer />
    </S.Menu>
  );
}
