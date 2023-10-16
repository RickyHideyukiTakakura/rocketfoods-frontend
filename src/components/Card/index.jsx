import { FiEdit2, FiHeart } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/role";
import { Button } from "../Button";
import { Quantity } from "../Quantity";
import * as S from "./styles";

export function Card({ data, dishDetails }) {
  const { user } = useAuth();

  return (
    <S.Card>
      <img src={data.image} alt={data.name} />
      {user.role === USER_ROLE.ADMIN ? (
        <button onClick={dishDetails}>
          <FiEdit2 />
        </button>
      ) : (
        <button>
          <FiHeart />
        </button>
      )}
      <p>{data.title}</p>
      <small>{data.description}</small>
      <p>R$ {data.price}</p>
      {user.role === USER_ROLE.ADMIN || (
        <>
          <Quantity />
          <Button title="Incluir" onClick={dishDetails} />
        </>
      )}
    </S.Card>
  );
}
