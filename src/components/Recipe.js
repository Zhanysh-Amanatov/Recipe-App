// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import RecipeCard from "./RecipeCard";
// import { Grid } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     dipslay: "flex",
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",

//     height: "100vh",
//     backgroundColor: "#fff",
//   },
//   gridContainer: {
//     paddingLeft: "40px",
//     paddingRight: "40px",
//   },
//   heading: {
//     paddingBottom: "30px",
//     color: "#fff",
//     textAlign: "center",
//   },
// }));

// const Recipe = ({ title, calories, image, ingredients }) => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid
//         container
//         spacing={8}
//         className={classes.gridContainer}
//         justifyContent="center"
//       >
//         <Grid item xs={10} sm={6} md={4}>
//           <RecipeCard />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

 import React from "react";

 const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div >
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>Calories:{calories}</p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
