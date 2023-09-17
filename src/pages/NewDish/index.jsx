import { PiUploadSimple } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import * as S from "./styles";

export function NewDish() {
  return (
    <S.NewDish>
      <Header />

      <S.Content>
        <button>
          {<RiArrowLeftSLine />}
          <span>Voltar</span>
        </button>

        <h3>Novo prato</h3>

        <S.Form>
          <S.DishImage>
            <label htmlFor="image">
              Imagem do prato
              <Input
                icon={PiUploadSimple}
                id="image"
                type="file"
                placeholder="Selecionar imagem"
              />
              <span>Selecionar imagem</span>
            </label>
          </S.DishImage>

          <label className="name" htmlFor="name">
            Nome
            <Input id="name" type="text" placeholder="Ex: Salada Caesar" />
          </label>

          <label className="category" htmlFor="category">
            Categoria
            <select name="category" id="category">
              <option>Refeição</option>
              <option>Sobremesa</option>
              <option>Comida</option>
            </select>
          </label>

          <label className="ingredients" htmlFor="ingredients">
            Ingredientes
            <S.ContainerTags>
              <IngredientItem value="React" />
              <IngredientItem isNew placeholder="Nova tag" />
            </S.ContainerTags>
          </label>

          <label className="price" htmlFor="price">
            Preço
            <Input type="text" id="price" placeholder="R$00,00" />
          </label>

          <label className="description" htmlFor="description">
            Descrição
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </label>

          <Button className="button" title="Salvar alterações" />
        </S.Form>
      </S.Content>

      <Footer />
    </S.NewDish>
  );
}
