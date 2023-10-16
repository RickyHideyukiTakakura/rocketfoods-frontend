import { FiMinus, FiPlus } from "react-icons/fi";
import * as S from "./styles";

export function Quantity() {
  return (
    <S.Quantity>
      <button>{<FiMinus />}</button>
      <span>01</span>
      <button>{<FiPlus />}</button>
    </S.Quantity>
  );
}
