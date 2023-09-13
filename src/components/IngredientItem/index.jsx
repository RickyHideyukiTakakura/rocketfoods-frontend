import { FiPlus, FiX } from "react-icons/fi";
import * as S from "./styles";

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <S.IngredientItem $isnew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </S.IngredientItem>
  );
}
