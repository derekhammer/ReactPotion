import React from 'react';

function NewPotionForm(){
  let _name = null;
  let _ingredient = null;
  let _modifier = null;
  let _stock = null;

  function handleNewPotionFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_ingredient.value);
    console.log(_modifier.value);
    console.log(_stock.value);
  }

  return(
    <div>
      <form onSubmit={handleNewPotionFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='New Potion'
          ref={(input) => {_name = input;}} />
        <input
          type='text'
          id='ingredient'
          placeholder='Main Ingredient'
          ref={(input) => {_ingredient = input;}} />
        <input
          type='text'
          id='modifier'
          placeholder='Stat Modified'
          ref={(input) => {_modifier = input;}} />
        <input
          type='number'
          id='stock'
          placeholder='In Stock'
          ref={(input) => {_stock = input;}} />
          <button type='submit'>Brew!</button>
      </form>
    </div>
  );
}

export default NewPotionForm;