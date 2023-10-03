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

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  // Organize os pratos em categorias
  const categorizedDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {});

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

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

        {/* Mapeie as categorias e renderize as seções */}
        {Object.keys(categorizedDishes).map((category) => (
          <Section key={category} title={category}>
            {categorizedDishes[category].map((dish) => (
              <Card
                key={dish.id} // Certifique-se de usar uma chave única para cada card
                data={{
                  image: dish.image,
                  title: dish.name,
                  price: dish.price,
                  quantity: dish.quantity,
                }}
                onClick={() => handleDetails(dish.id)}
              />
            ))}
          </Section>
        ))}
      </main>

      <Footer />
    </S.Home>
  );
}
