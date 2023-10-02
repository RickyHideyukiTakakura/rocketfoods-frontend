import { FiEdit2, FiHeart } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { USER_ROLE } from "../../utils/role";
import { Button } from "../Button";
import { Quantity } from "../Quantity";
import * as S from "./styles";

export function Card({ data, ...rest }) {
  const { user } = useAuth();

  return (
    <S.Card {...rest}>
      <img src={data.image} />
      {user.role === USER_ROLE.ADMIN ? (
        <a>
          <FiEdit2 />
        </a>
      ) : (
        <a>
          <FiHeart />
        </a>
      )}
      <p>{data.title}</p>
      <p>R$ {data.price}</p>
      {user.role === USER_ROLE.ADMIN || (
        <>
          <Quantity />
          <Button title="Incluir" />
        </>
      )}
    </S.Card>
  );
}
