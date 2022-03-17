import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(formData);
    console.log(formData);
    setFormData({...initialFormState});
  }

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name} 
              />
            </td>
            <td>
              <input
              type="text"
              id="cuisine"
              name="cuisine"
              placeholder="Cuisine"
              onChange={handleChange}
              value={formData.cuisine} 
              />
            </td>
            <td>
              <input
              type="url"
              id="photo"
              name="photo"
              placeholder="URL"
              onChange={handleChange}
              value={formData.photo} 
              />
            </td>
            <td>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              />
            </td>
            <td>
            <textarea
              id="preparation"
              name="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
