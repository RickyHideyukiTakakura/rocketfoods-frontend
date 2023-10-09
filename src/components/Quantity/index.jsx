import { FiMinus, FiPlus } from "react-icons/fi";
import * as S from "./styles";

export function Quantity() {
  return (
    <S.Quantity>
      <span>{<FiMinus />}</span>
      <span>01</span>
      <span>{<FiPlus />}</span>
    </S.Quantity>
  );
}
