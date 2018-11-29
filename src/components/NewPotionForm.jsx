import React from 'react';

function NewPotionForm(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='New Potion' />
        <input
          type='text'
          id='ingredient'
          placeholder='Main Ingredient' />
        <input
          type='text'
          id='modifier'
          placeholder='Stat Modified' />
        <input
          type='number'
          id='stock'
          placeholder='In Stock' />
      </form>
    </div>
  );
}

export default NewPotionForm;