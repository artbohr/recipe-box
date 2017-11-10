import React, { Component } from "react";
import Recipe from "./Recipe";
import { Accordion } from "react-bootstrap";

class RecipeHolder extends Component {
  render() {
    const recipeOrder = this.props.recipeList.map((recipe, index) => {
      return (
        <Recipe
          recipeList={this.props.recipeList}
          title={recipe.title}
          ingredients={recipe.ingredients}
          index={index}
          key={"key" + index}
          editRecipe={this.props.editRecipe}
          deleteRecipe={this.props.deleteRecipe.bind(null, index)}
        />
      );
    });

    return <Accordion>{recipeOrder}</Accordion>;
  }
}

export default RecipeHolder;
