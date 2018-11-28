import React from "react";
import PropTypes from "prop-types";


function Potion(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredient}</p>
            <p>{props.modifier}</p>
            <p>{props.stock}</p>
            <hr/>
        </div>
    );
}

Potion.propTypes = {
    name: PropTypes.string,
    ingredient: PropTypes.string,
    modifier: PropTypes.string,
    stock: PropTypes.number
}

export default Potion;