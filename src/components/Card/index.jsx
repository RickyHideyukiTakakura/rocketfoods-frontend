import { FiHeart } from "react-icons/fi";
import { Button } from "../Button";
import { Quantity } from "../Quantity";
import * as S from "./styles";

export function Card({ image, title, price, quantity }) {
  return (
    <S.Card>
      <img src={image} />
      {<FiHeart />}
      <p>{title}</p>
      <p>R$ {price}</p>
      <Quantity />
      <Button title="Incluir" />
    </S.Card>
  );
}
