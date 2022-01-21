import React from "react";

function PizzaForm( {formValues, updateFormValues, updatePizza} ) {

  function handleFormEntry(field, event) {
    updateFormValues(field, event.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    updatePizza(formValues);
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {formValues.topping}
            onChange = {(e) => handleFormEntry("topping", e)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value = {formValues.size} onChange = {(e) => handleFormEntry("size", e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = {formValues.vegetarian ? "checked" : ""}
              onChange = {(e) => handleFormEntry("vegetarian", e)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked = {!formValues.vegetarian ? "checked" : ""}
              onChange = {(e) => handleFormEntry("vegetarian", e)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
