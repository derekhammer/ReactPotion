import React from 'react';
import PropTypes from 'prop-types';


function Potion(props){
  return(
    <div className='potions'>
      <style jsx>{`
        .potions {
          border: 3px solid gray;
          width: 400px;
          text-align: center;
          padding: 7px;
          margin-top: 10px;
        }
    `}</style>
      <h3>{props.name}</h3>
      <p>Ingredient: <i>{props.ingredient}</i></p>
      <p>Stat Modified: <i>{props.modifier}</i></p>
      <p>Current Stock: <i>{props.stock}</i></p>
    </div>
  );
}

Potion.propTypes = {
  name: PropTypes.string,
  ingredient: PropTypes.string,
  modifier: PropTypes.string,
  stock: PropTypes.number
};

export default Potion;