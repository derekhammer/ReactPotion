import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        h1 {
          color: red;
        }
    `}</style>
      <h1>Potion Shop</h1>
      <Link to="/">Home</Link> | <Link to="/newpotion">Craft Potion</Link>
    </div>
  );
}

export default Header;