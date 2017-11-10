import React, { Component } from "react";
import "../styles/App.css";
import RecipeHolder from "./RecipeHolder";
import { Grid, Button, FormGroup, FormControl } from "react-bootstrap";

const mainRecipes = [
  {
    title: "Apple Pie",
    ingredients: ["Apples", "Base"]
  },
  {
    title: "Orange Pie",
    ingredients: ["Oranges", "Base", "Sugar"]
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: mainRecipes,
      recipeValue: "",
      ingredientsValue: ""
    };

    this.handleRecipeValue = this.handleRecipeValue.bind(this);
    this.handleIngredientsValue = this.handleIngredientsValue.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  componentDidMount() {
    let recipes = JSON.parse(localStorage.getItem("_artbohr_recipes"));
    if (recipes) {
      this.setState({ recipes });
    }
  }

  handleRecipeValue(e) {
    this.setState({ recipeValue: e.target.value });
  }

  handleIngredientsValue(e) {
    this.setState({ ingredientsValue: e.target.value });
  }

  handleCreate(event) {
    event.preventDefault();
    let newRecipe = this.state.recipes;

    newRecipe.push({
      title: this.state.recipeValue,
      ingredients: this.state.ingredientsValue.split(",")
    });

    localStorage.setItem("_artbohr_recipes", JSON.stringify(newRecipe));

    this.setState({
      recipes: newRecipe,
      recipeValue: "",
      ingredientsValue: ""
    });
  }

  deleteRecipe(index) {
    let recipes = this.state.recipes;
    recipes.splice(index, 1);
    localStorage.setItem("_artbohr_recipes", JSON.stringify(recipes));
    this.setState({ recipes });
  }

  editRecipe(newState) {
    localStorage.setItem("_artbohr_recipes", JSON.stringify(newState));
    this.setState({ recipes: newState });
  }

  render() {
    return (
      <Grid>
        <h1 id="title">Recipe Box</h1>
        <RecipeHolder
          recipeList={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
          editRecipe={this.editRecipe}
        />
        <FormGroup>
          <FormControl
            onChange={event => {
              this.setState({ recipeValue: event.target.value });
            }}
            value={this.state.recipeValue}
            type="text"
            placeholder="Recipe Title"
          />
          <FormControl
            onChange={event => {
              this.setState({ ingredientsValue: event.target.value });
            }}
            value={this.state.ingredientsValue}
            type="text"
            placeholder="Ingredients"
          />
          <Button
            id="addButton"
            className="panelButtons"
            bsStyle="default"
            onClick={this.handleCreate}
            bsSize="large"
          >
            Add Recipe
          </Button>
        </FormGroup>
      </Grid>
    );
  }
}

export default App;
