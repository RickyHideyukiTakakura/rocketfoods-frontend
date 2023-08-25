import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { Footer } from "../Footer";
import { Input } from "../Input";
import * as S from "./styles";

export function Menu() {
  return (
    <S.Menu>
      <div>
        <button>
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

        <button>Sair</button>
      </div>

      <Footer />
    </S.Menu>
  );
}
