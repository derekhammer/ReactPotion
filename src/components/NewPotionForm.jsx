import React from 'react';
import PropTypes from 'prop-types';

function NewPotionForm(props){
  let _name = null;
  let _ingredient = null;
  let _modifier = null;
  let _stock = null;

  function handleNewPotionFormSubmission(event) {
    event.preventDefault();
    props.onNewPotionCreation({name: _name.value, ingredient: _ingredient.value, modifier: _modifier.value, stock: parseInt(_stock.value)});
    _name.value = '';
    _ingredient.value = '';
    _modifier.value = '';
    _stock.value = '';
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

NewPotionForm.propTypes = {
  onNewPotionCreation: PropTypes.func
};

export default NewPotionForm;