import React from 'react';
import Potion from './Potion';

var masterPotionList = [
  {
    name: 'Titan Grip',
    ingredient: 'Dragon Blood',
    modifier: 'Strength',
    stock: 32
  },
  {
    name: 'Mind Tap',
    ingredient: 'Mana Wraith Essence',
    modifier: 'Intelligence',
    stock: 17
  },
  {
    name: 'Cobra Strike',
    ingredient: 'Purified Felwater',
    modifier: 'Agility',
    stock: 10
  },
  {
    name: 'Goblin Tea',
    ingredient: 'Gildroot',
    modifier: 'Luck',
    stock: 7
   },
  // {
  //   name: 'Potion of Insanity',
  //   ingredient: 'M͏̵̰̯̩̭͈̞̪͇̝̺̥̯̮̗͍̙̲̟́͘͢à̵̶̡̮͎̬͔͓͍̹̟͉͖̻̗̫̰̘̞ͅd̨̛҉͘҉̦̜̲̞̭͍̘̟̻̪͖̙͎̯̙̩̗͉n̸̵̦͔̬͎̹̼͙͉̙͍̗͔̭͇̭͜͠ͅͅé̴̖͖̗͖͓̰̹̙̫͉͍͇͢͜s̶̢̪͇̣̱̟͖͍͔̝̼̀s̨̛̳͖̪̩͚͙͕̠̩̘̭̘̼͓̱̲͇͜͟ͅͅ',
  //   modifier: '???',
  //   stock: 1
  // }
    
];

function PotionList(){
  return(
    <div>
      <hr/>
      {masterPotionList.map((potion, index) =>
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

export default PotionList;