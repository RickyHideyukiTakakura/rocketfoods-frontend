import { useEffect, useState } from "react";
import { PiReceipt } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonReturn } from "../../components/ButtonReturn";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientTag } from "../../components/IngredientTag";
import { Quantity } from "../../components/Quantity";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/role";
import * as S from "./styles";

export function Details() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const imageURL =
    data && data.image && `${api.defaults.baseURL}/files/${data.image}`;

  function navigateBack() {
    navigate(-1);
  }

  function handleNavigateToEdit() {
    navigate(`/edit/${params.id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDishes();
  }, []);

  return (
    <S.Details>
      <Header />

      {data && (
        <S.Main>
          <ButtonReturn onClick={navigateBack} />

          <img src={imageURL} alt={data.name} />

          <div>
            <S.Description>
              <h2>{data.name}</h2>

              <p>{data.description}</p>

              <div>
                {data.ingredients.map((ingredient) => {
                  return (
                    <IngredientTag
                      key={ingredient.id}
                      title={ingredient.name}
                    />
                  );
                })}
              </div>
            </S.Description>

            <S.Order>
              {user.role === USER_ROLE.CUSTOMER && <Quantity />}

              {user.role === USER_ROLE.ADMIN ? (
                <Button title="Editar pedido" onClick={handleNavigateToEdit} />
              ) : (
                <Button title={"pedir ∙ R$" + data.price} icon={PiReceipt} />
              )}
            </S.Order>
          </div>
        </S.Main>
      )}
      <Footer />
    </S.Details>
  );
}
