import { useEffect, useRef, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import './mycss.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './About';
import Recipe2 from './Recipe2';

function App() {
  const APP_ID = "552912f3"
  const APP_KEY = "4a5430b72ea301dec12267a7a9bdcb58"
  const [search, setSearch] = useState("");
  const [querry, setQuerry] = useState("pasta$");
  const [recipes, setRecipes] = useState([]);
  const disName = useRef();

  useEffect(() => {
    disName.current = querry;
    getRecipe();
  }, [querry])

  const getRecipe = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    // console.log(data);
  }
  const array1 = ["sex", "chut", "pussy"];
  const array2 = ["lund", "lauda", "fuck"];
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuerry(search.toLowerCase());
    setSearch("");
  }

  return (
    <>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><b>DishTopTen</b></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about">How it works?</a>
                  </li>
                </ul>
                <form className="d-flex" onSubmit={getSearch} >
                  <input className="form-control me-2 " type="text" placeholder="Search Your Food" aria-label="Search" onChange={updateSearch} value={search} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          {/* <form action="" onSubmit={getSearch} >
        <input type="text" onChange={updateSearch} value={search} />
        <button type='submit'>Search</button>
      </form> */}
        </div>
        <Routes>
          <Route exact path='/' element={<>

            <div className="btwn" style={{ fontSize: "1.5rem", fontWeight: "500" }}>
              {(disName.current === "pasta$" || disName.current === undefined || disName.current === '') ? ("Browse, Cook, Enjoy !!") : (`Here are the results for '${disName.current}'`)}
            </div>

            {(array1.indexOf(disName.current) !== -1 || array2.indexOf(disName.current) !== -1) ?
              (
                (array1.indexOf(disName.current) !== -1) ? (
                  <div className="recipe2"><Recipe2
                    image={"https://i.pinimg.com/236x/cb/38/7a/cb387ae04cf731b141fcd5ce269708bc.jpg"}
                  /></div>
                ) : (
                  <div className="recipe2"><Recipe2
                    image={"https://i.pinimg.com/564x/17/61/21/1761217732973642429be750bd4dbde8.jpg"}
                  /></div>)

              )
              :
              (<div className="recipes">
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
              </div>)}
          </>} />
          <Route exact path='/about' element={<About />} />
        </Routes>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Go to Start &#8679;</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 DishTopTen, <small>by Kunal Rajput</small></p>
          </footer>
        </div>

      </Router>

    </>
  );
}

export default App;
