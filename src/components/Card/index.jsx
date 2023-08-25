import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import * as S from "./styles";

export function Card({ image, title, price, quantity }) {
  return (
    <S.Card>
      <img src={image} />
      {<FiHeart />}
      <p>{title}</p>
      <p>R$ {price}</p>
      <div>
        <button>{<FiMinus />}</button>
        <span>{quantity}</span>
        <button>{<FiPlus />}</button>
      </div>
      <Button title="Incluir" />
    </S.Card>
  );
}
