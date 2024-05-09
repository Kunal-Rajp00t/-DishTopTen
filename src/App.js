import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID="552912f3"
  const APP_KEY="4a5430b72ea301dec12267a7a9bdcb58"
  const [search, setSearch] = useState(""); 
  const [querry, setQuerry] = useState("pasta");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipe();
  }, [querry])

  const getRecipe=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits)
    console.log(data);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch=(e)=>{
    e.preventDefault();
    setQuerry(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form action="" onSubmit={getSearch} >
        <input type="text" onChange={updateSearch} value={search} />
        <button type='submit'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            making={recipe.recipe.url}
            hlabel={recipe.recipe.healthLabels}
            cuisine={recipe.recipe.cuisineType}
          />
          ))}
      </div>
    </div>
  );
}

export default App;
