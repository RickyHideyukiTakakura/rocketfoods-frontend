import { useState } from "react";
import { PiUploadSimple } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { api } from "../../services/api";
import * as S from "./styles";

export function NewDish() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [imageFile, setImageFile] = useState(null);

  async function handleSubmitNewDish() {
    if (!name) {
      return alert("Please enter a dish name");
    }

    if (newIngredient) {
      return alert("Please enter a new ingredient or clean the field");
    }

    if (!category) {
      return alert("Please select a category");
    }

    if (!price) {
      return alert("Please enter a price");
    }

    const createImage = createImageFile(imageFile);

    await api.post("/dishes", {
      name,
      category,
      price,
      description,
      ingredients,
      // createImage,
    });

    alert("New dish created successfully");
    navigate(-1);
  }

  function createImageFile(imageFile) {
    if (imageFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("image", imageFile);

      return fileUploadForm;
    }
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];

    setImageFile(file);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleDeleteIngredient(deletedIngredient) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deletedIngredient)
    );
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <S.NewDish>
      <Header />

      <S.Content>
        <button onClick={handleBack}>
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
                name="image"
                e
                type="file"
                placeholder="Selecionar imagem"
                onChange={handleChangeImage}
              />
              <span>Selecionar imagem</span>
            </label>
          </S.DishImage>

          <label className="name" htmlFor="name">
            Nome
            <Input
              id="name"
              type="text"
              placeholder="Ex: Salada Caesar"
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className="category" htmlFor="category">
            Categoria
            <select
              name="category"
              id="category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Comida">Comida</option>
            </select>
          </label>

          <label className="ingredients">
            Ingredientes
            <S.ContainerTags>
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleDeleteIngredient(ingredient)}
                />
              ))}
              <IngredientItem
                isNew
                placeholder="Novo ingrediente"
                value={newIngredient}
                onChange={(event) => setNewIngredient(event.target.value)}
                onClick={handleAddIngredient}
              />
            </S.ContainerTags>
          </label>

          <label className="price" htmlFor="price">
            Preço
            <Input
              type="text"
              id="price"
              placeholder="R$00,00"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>

          <label className="description" htmlFor="description">
            Descrição
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>

          <Button
            className="button"
            title="Salvar alterações"
            onClick={handleSubmitNewDish}
          />
        </S.Form>
      </S.Content>

      <Footer />
    </S.NewDish>
  );
}
