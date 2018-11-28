import React from "react";
import Potion from "./Potion";

function PotionList(){
    return(
        <div>
        <Potion
        name="Titan Grip"
        ingredient="Dragon Blood"
        modifier="Strength"
        stock="32"
        />
        </div>
    );
}

export default PotionList;