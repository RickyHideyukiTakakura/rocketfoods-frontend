import { useEffect, useState } from "react";
import { PiUploadSimple } from "react-icons/pi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { api } from "../../services/api";
import * as S from "./styles";

export function EditDish() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  async function handleSubmitEditDish() {
    await api.put(`/dishes/${params.id}`, {
      name: name || data.name,
      category: category || data.category,
      price: price || data.price,
      ingredients,
      description: description || data.description,
    });

    alert("Dish edited successfully!");

    navigate(-1);
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

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return (
    <S.EditDish>
      <Header />

      <S.Content>
        <button onClick={handleBack}>
          {<RiArrowLeftSLine />}
          <span>Voltar</span>
        </button>

        <h3>Editar prato</h3>

        {data && (
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

            <label className="name" htmlFor="name">
              Nome
              <Input
                id="name"
                type="text"
                placeholder={data.name}
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
                placeholder={data.price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </label>

            <label className="description" htmlFor="description">
              Descrição
              <Textarea
                id="description"
                placeholder={data.description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>

            <div className="button">
              <Button title="Excluir prato" />
              <Button
                title="Salvar alterações"
                onClick={handleSubmitEditDish}
              />
            </div>
          </S.Form>
        )}
      </S.Content>

      <Footer />
    </S.EditDish>
  );
}
