import { PiReceipt } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import PlateImage from "../../assets/Mask group-1.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Quantity } from "../../components/Quantity";
import * as S from "./styles";

export function Details() {
  return (
    <S.Details>
      <Header />

      <div>
        <button>
          {<RiArrowLeftSLine />}
          <span>Voltar</span>
        </button>

        <img src={PlateImage} alt="" />

        <div>
          <S.Description>
            <h2>Salada Ravanello</h2>

            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <div>
              <span>Alface</span>
              <span>Alface</span>
              <span>Alface</span>
              <span>Alface</span>
            </div>
          </S.Description>

          <S.Order>
            <Quantity />

            <button>
              <PiReceipt /> <span>pedir ∙ R$ 25,00</span>
            </button>
          </S.Order>
        </div>
      </div>

      <Footer />
    </S.Details>
  );
}
