import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/home-food.png";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import * as S from "./styles";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const categorizedDishes = dishes.reduce((accumulator, dish) => {
    if (!accumulator[dish.category]) {
      accumulator[dish.category] = [];
    }
    accumulator[dish.category].push(dish);
    return accumulator;
  }, {});

  function getImageURL(dishImage) {
    return dishImage ? `${api.defaults.baseURL}/files/${dishImage}` : "";
  }

  function handleNavigateToDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  return (
    <S.Home>
      <Header onSearchChange={setSearch} />

      <main>
        <S.Banner>
          <img src={HomeImage} alt="Foto de macarons" />
          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </S.Banner>

        {Object.keys(categorizedDishes).map((category) => (
          <Section key={category} title={category}>
            {categorizedDishes[category].map((dish) => (
              <Card
                key={dish.id}
                data={{
                  image: getImageURL(dish.image),
                  title: dish.name,
                  price: dish.price,
                  quantity: dish.quantity,
                }}
                dishDetails={() => handleNavigateToDetails(dish.id)}
              />
            ))}
          </Section>
        ))}
      </main>

      <Footer />
    </S.Home>
  );
}
