import { useState } from "react";
import { PiUploadSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonReturn } from "../../components/ButtonReturn";
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
    try {
      validateInput();

      const uploadedImageFileName = await uploadImage(imageFile);

      const newDishData = {
        name,
        category,
        price,
        description,
        ingredients,
        image: uploadedImageFileName,
      };

      await createNewDish(newDishData);

      alert("New dish created successfully");

      navigateBack();
    } catch (error) {
      handleError(error);
    }
  }

  async function uploadImage(imageFile) {
    const imageFormData = new FormData();
    imageFormData.append("image", imageFile);

    const {
      data: { filename },
    } = await api.post("/dishes/image", imageFormData);

    return filename;
  }

  async function createNewDish(newDishData) {
    await api.post("/dishes", newDishData);
  }

  function validateInput() {
    if (
      !name ||
      !category ||
      !price ||
      !description ||
      ingredients.length === 0
    ) {
      throw new Error("Please fill in all fields.");
    }
  }

  function handleError(error) {
    alert("Error creating new dish: " + error.message);
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

  function navigateBack() {
    navigate(-1);
  }

  return (
    <S.NewDish>
      <Header />

      <S.Content>
        <ButtonReturn onClick={navigateBack} />

        <h3>Novo prato</h3>

        <S.Form encType="multipart/form-data">
          <S.DishImage>
            <label htmlFor="image">
              Imagem do prato
              <Input
                icon={PiUploadSimple}
                id="image"
                name="image"
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
