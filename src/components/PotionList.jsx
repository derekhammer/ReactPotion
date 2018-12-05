import React from 'react';
import Potion from './Potion';
import PropTypes from 'prop-types';

// var masterPotionList = [
//   {
//     name: 'Titan Grip',
//     ingredient: 'Dragon Blood',
//     modifier: 'Strength',
//     stock: 32
//   },
//   {
//     name: 'Mind Tap',
//     ingredient: 'Mana Wraith Essence',
//     modifier: 'Intelligence',
//     stock: 17
//   },
//   {
//     name: 'Cobra Strike',
//     ingredient: 'Purified Felwater',
//     modifier: 'Agility',
//     stock: 10
//   },
//   {
//     name: 'Goblin Tea',
//     ingredient: 'Gildroot',
//     modifier: 'Luck',
//     stock: 7
//    },
    
// ];

function PotionList(props){
  return(
    <div>
      <hr/>
      {props.potionList.map((potion, index) =>
        <Potion name={potion.name}
          ingredient={potion.ingredient}
          modifier={potion.modifier}
          stock={potion.stock}
          key={index}          
        />        
      )}
        
    </div>
  );
}

PotionList.propTypes = {
  potionList: PropTypes.array
};

export default PotionList;