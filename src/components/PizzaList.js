import React from "react";
import Pizza from "./Pizza";

function PizzaList( {pizzas, pizzasLoaded, onClickEditPizzaButton} ) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
        pizzasLoaded ? pizzas.map((pizza) => <Pizza key = {pizza.id} pizza = {pizza} onClickEditPizzaButton = {onClickEditPizzaButton} />) : <tr><td colSpan = '4'>Loading...</td></tr>
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
