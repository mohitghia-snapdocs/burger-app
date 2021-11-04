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
      <>
        <p>{ingredient}</p>
        <div className="ingrBtns">
          <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', ingredient)}>Add</button>
          <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove',ingredient)}>Remove</button>
        </div>
      </>
    )
  }

  burgerContent() {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;

    let burger = [];

    for (let i = 0; i < lettuce; i++){
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }

    for (let i = 0; i < tomato; i++){
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }

    for (let i = 0; i < cheese; i++){
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }

    for (let i = 0; i < meat; i++){
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }

    if(burger.length === 0)
      burger.push(<p key="0">Please start adding ingredients!</p>);

    return burger;
  }

  addRemoveIngredient = (action, ingredient) => {
    let {
      lettuce,
      tomato,
      cheese,
      meat
    } = this.state;

    let stateValue;
    switch(ingredient){
      case 'lettuce':{
        stateValue = lettuce;
        break;
      }
      case 'tomato':{
        stateValue = tomato;
        break;
      }
      case 'cheese':{
        stateValue = cheese;
        break;
      }
      case 'meat':{
        stateValue = meat;
        break;
      }
      default: break;
    }

    if(action === 'add'){
      stateValue = stateValue + 1;
    }else{
      stateValue = stateValue - 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0
    });
  }

  render() {
    return (
      <>
        <div className="burgerDisplay">
          <div className="topSide"></div>
          {this.burgerContent()}
          <div className="bottomSide"></div>
        </div>
        <div className="restaurantName">
          Mohit's Burger Joint
        </div>
        <div className="ingredientChoices">
          {this.loadIngredients()}
        </div>
      </>
    );
  }
}

export default Burger;