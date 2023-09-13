import { PiUploadSimple } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import * as S from "./styles";

export function EditDish() {
  return (
    <S.EditDish>
      <Header />

      <S.Content>
        <button>
          {<RiArrowLeftSLine />}
          <span>Voltar</span>
        </button>

        <h3>Editar prato</h3>

        <S.Form>
          <S.DishImage>
            <label htmlFor="image">
              Imagem do prato
              <Input
                icon={PiUploadSimple}
                id="image"
                type="file"
                placeholder="Selecionar imagem para altera-la"
              />
              <span>Selecionar imagem para altera-la</span>
            </label>
          </S.DishImage>

          <label htmlFor="name">
            Nome
            <Input id="name" type="text" placeholder="Salada Caesar" />
          </label>

          <label htmlFor="category">
            Categoria
            <select name="category" id="category">
              <option>Refeição</option>
              <option>Sobremesa</option>
              <option>Comida</option>
            </select>
          </label>

          <label htmlFor="ingredients">
            Ingredientes
            <S.ContainerTags>
              <IngredientItem value="React" />
              <IngredientItem isNew placeholder="Nova tag" />
            </S.ContainerTags>
          </label>

          <label htmlFor="price">
            Preço
            <Input type="text" id="price" placeholder="R$40,00" />
          </label>

          <label htmlFor="description">
            Descrição
            <Textarea
              id="description"
              placeholder="A Salada César é uma opção refrescante para o verão."
            />
          </label>

          <div>
            <Button title="Excluir prato" />
            <Button title="Salvar alterações" />
          </div>
        </S.Form>
      </S.Content>

      <Footer />
    </S.EditDish>
  );
}
