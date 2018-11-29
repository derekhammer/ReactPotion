import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='header'>
      <style jsx>{`
        .header {
          text-align: center;
        }
    `}</style>
      <h1>Potion Shop</h1>
      <Link to="/">Home</Link> | <Link to="/newpotion">Craft Potion</Link>
    </div>
  );
}

export default Header;