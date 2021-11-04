import React from 'react';
import './Burger.css';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lettuce: 0,
      tomato: 0,
      cheese: 0,
      meat: 0
    };
  }

  loadIngredients() {
    return Object.keys(this.state).map((ingredient, index) => 
      <div key ={ingredient} >
        <p>{ingredient}</p>
        <div className="ingr-btns">
          <button className="ingr-btn" onClick={() => this.addRemoveIngredient("add", ingredient)}>Add</button>
          <button className="ingr-btn" onClick={() => this.addRemoveIngredient("remove",ingredient)}>Remove</button>
        </div>
      </div>
    )
  }

  ingredientContent(ingredientCount, ingredientClassName, burgerStackLength) {
    let ingredientStack = []

    for (let i = 0; i < ingredientCount; i++) {
      ingredientStack.push(<div key={burgerStackLength + i} className={ingredientClassName}></div>);
    }

    return ingredientStack
  }

  burgerContent() {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;

    let burgerStack = [];
    
    burgerStack = burgerStack.concat(this.ingredientContent(lettuce, "lettuce-side", burgerStack.length))
    burgerStack = burgerStack.concat(this.ingredientContent(tomato, "tomato-side", burgerStack.length))
    burgerStack = burgerStack.concat(this.ingredientContent(cheese, "cheese-side", burgerStack.length))
    burgerStack = burgerStack.concat(this.ingredientContent(meat, "meat-side", burgerStack.length))

    if(burgerStack.length === 0)
      burgerStack.push(<p key="0">Please start adding ingredients!</p>);

    return burgerStack;
  }

  addRemoveIngredient = (action, ingredient) => {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;

    let stateValue;
    switch(ingredient) {
      case 'lettuce': {
        stateValue = lettuce;
        break;
      }
      case 'tomato': {
        stateValue = tomato;
        break;
      }
      case 'cheese': {
        stateValue = cheese;
        break;
      }
      case 'meat': {
        stateValue = meat;
        break;
      }
      default: break;
    }

    if(action === 'add') {
      stateValue++;
    }
    else {
      stateValue--;
    }

    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0
    });
  }

  render() {
    return (
      <>
        <div className="burger-display">
          <div className="top-side"></div>
          {this.burgerContent()}
          <div className="bottom-side"></div>
        </div>
        <div className="restaurant-name">
          Mohit's Burger Joint
        </div>
        <div className="ingredient-choices">
          {this.loadIngredients()}
        </div>
      </>
    );
  }
}

export default Burger;