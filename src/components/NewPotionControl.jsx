import React from 'react';
import NewPotionForm from './NewPotionForm';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewPotionControl extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }
    handleTroubleshootingConfirmation(){
        this.setState({formVisibleOnPage: true});
      }

      render(){
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage){
          currentlyVisibleContent = <NewPotionForm />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
          }
        return (
          <div>
            {currentlyVisibleContent}
          </div>
        );
      }
    }

export default NewPotionControl;