import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzasLoaded, setPizzasLoaded] = useState(false);

  const startingPizza = 
    {
      id: "", 
      topping: "", 
      size: "", 
      vegetarian: true
    }
  const [formValues, setFormValues] = useState(startingPizza)

  useEffect(()=> {
    fetch("http://localhost:3001/pizzas")
      .then((r)=>r.json())
      .then((pizzaList) => setPizzas(pizzaList))
      .then(()=>setPizzasLoaded(true))   
      }, [])

  function onClickEditPizzaButton(pizza) {
    setFormValues(pizza);
  }

  function updateFormValues(field, value) {
    let newValues = {...formValues};
    
    if(field === "vegetarian") {
      if(value === "Vegetarian")
        {
        newValues.vegetarian = true;
        }
      else
        {
        newValues.vegetarian = false;
        }
    }
    else {
      newValues[field] = value;
    }
    setFormValues(newValues);
  }

  function updatePizza(updatedPizza) {
    if(updatedPizza.id !== "") {
      fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
          },
        body: JSON.stringify(updatedPizza)
        })

    const newPizzaList = pizzas.map((pizza)=> {
      if(pizza.id === updatedPizza.id) {
        return updatedPizza;
      }
      else {
        return pizza;
      }
    })

    setPizzas(newPizzaList);

    setFormValues(startingPizza);
    }
  }

  return (
    <>
      <Header />
      <PizzaForm formValues = {formValues} updateFormValues = {updateFormValues} updatePizza = {updatePizza} />
      <PizzaList pizzas = {pizzas} pizzasLoaded = {pizzasLoaded} onClickEditPizzaButton = {onClickEditPizzaButton} />
    </>
  );
}

export default App;
