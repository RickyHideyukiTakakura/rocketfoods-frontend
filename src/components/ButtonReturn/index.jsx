import { RiArrowLeftSLine } from "react-icons/ri";
import * as S from "./styles";

export function ButtonReturn({ ...rest }) {
  return (
    <S.ButtonReturn {...rest}>
      {<RiArrowLeftSLine />}
      <span>Voltar</span>
    </S.ButtonReturn>
  );
}
