import React  from "react";
import './IngredientForm.css';
import Card from '../UI/Card.css';
 //const IngredientForm = React.memo(props =>{ // to prevent unwanted rerendering
    const IngredientForm = React.memo(props =>{
    const submitHandler =(e)=>{
        e.preventDefault();

    }


    return(
        <section className="ingredient-form">
      <Card>
       
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
      
      </Card>
    </section>
    )
 });

export default IngredientForm;
