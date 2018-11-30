import React from 'react';

class NewPotionControl extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    render(){
        return(
            <div>
                <p>This is a test of NewPotionControl.jsx</p>
            </div>
        );
    }
}

export default NewPotionControl;