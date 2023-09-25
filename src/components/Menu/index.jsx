import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { Footer } from "../Footer";
import { Input } from "../Input";
import * as S from "./styles";

export function Menu({ handleSignOut, handleCloseMenu, styles }) {
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
        />

        <button onClick={handleSignOut}>Sair</button>
      </div>

      <Footer />
    </S.Menu>
  );
}
