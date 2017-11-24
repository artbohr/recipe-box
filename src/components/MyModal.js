import React, { Component } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";

class MyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      recipeValue2: "",
      ingredientsValue2: ""
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.editModalRecipe = this.editModalRecipe.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({
      showModal: true,
      recipeValue2: this.props.title,
      ingredientsValue2: this.props.ingredients
    });
  }

  editModalRecipe() {
    let recipes = this.props.recipeList;
    recipes[this.props.index].title = this.state.recipeValue2;
    if (
      this.state.ingredientsValue2 !== recipes[this.props.index].ingredients
    ) {
      recipes[
        this.props.index
      ].ingredients = this.state.ingredientsValue2.split(",");
    }

    this.props.editRecipe(recipes);
    this.close();
  }

  render() {
    return [
      <Button
        className="panelButtons"
        key="button"
        bsStyle="primary"
        onClick={this.open}
      >
        Edit
      </Button>,

      <Modal key="modal" show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Recipe Name</ControlLabel>
            <FormControl
              value={this.state.recipeValue2}
              onChange={event => {
                this.setState({ recipeValue2: event.target.value });
              }}
              type="text"
            />
            <ControlLabel>Ingredients</ControlLabel>
            <FormControl
              value={this.state.ingredientsValue2}
              onChange={event => {
                this.setState({ ingredientsValue2: event.target.value });
              }}
              type="text"
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.editModalRecipe}>Save</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    ];
  }
}

export default MyModal;
