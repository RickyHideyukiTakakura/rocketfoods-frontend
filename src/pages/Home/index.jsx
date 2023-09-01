import FoodImageOne from "../../assets/Mask group.png";
import HomeImage from "../../assets/home-food.png";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import * as S from "./styles";

export function Home() {
  return (
    <S.Home>
      <Header />

      <main>
        <S.Banner>
          <img src={HomeImage} alt="Foto de macarons" />
          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </S.Banner>

        <Section title="Refeições">
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
        </Section>

        <Section title="Pratos principais">
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
        </Section>

        <Section title="Pratos principais">
          <Card
            image={FoodImageOne}
            title="Salada Ravanello >"
            price={49.97}
            quantity={1}
          />
        </Section>
      </main>

      <Footer />
    </S.Home>
  );
}
