import React, { Component } from "react";
import { Panel, Button } from "react-bootstrap";
import MyModal from "./MyModal";

class Recipe extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => {
      return <li key={"key" + index}>{ingredient}</li>;
    });

    return (
      <Panel collapsible header={this.props.title} eventKey={this.props.index}>
        <ul>{ingredients}</ul>
        <MyModal
          recipeList={this.props.recipeList}
          index={this.props.index}
          title={this.props.title}
          ingredients={this.props.ingredients}
          editRecipe={this.props.editRecipe}
        />
        <Button
          className="panelButtons"
          bsStyle="danger"
          onClick={this.props.deleteRecipe}
        >
          Delete
        </Button>
      </Panel>
    );
  }
}

export default Recipe;
