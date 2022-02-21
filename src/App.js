import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import { makeStyles,Box } from "@material-ui/core";
 
const useStyles = makeStyles(() => ({
container:{
  width:"200px",
  height:"200px",
}
}))

const App = () => {
  const classes = useStyles();
  const APP_ID = "04c5b74d";
  const APP_KEY = "d76d870f265c6842fb7641450d544ab7	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Box className="container">
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default App;

// Back Up

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Recipe from "./components/Recipe";

// const App = () => {
//   const APP_ID = "04c5b74d";
//   const APP_KEY = "d76d870f265c6842fb7641450d544ab7	";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query,setQuery] = useState('chicken');

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//     console.log(search);
//   };
//   const getSearch = e =>{
//     e.preventDefault();
//     setQuery(search);
//     setSearch('');
//   }

//   return (
//     <div className="App">
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={handleSearch}
//         />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//       <div className="recipes">
//       {recipes.map((recipe) => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//       </div>
//     </div>
//   );
// };

// export default App;
