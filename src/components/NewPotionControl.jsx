import React from 'react';
import NewPotionForm from './NewPotionForm';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';

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
            currentlyVisibleContent = <NewPotionForm onNewPotionCreation={this.props.onNewPotionCreation}/>;
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

    NewPotionControl.propTypes = {
        onNewPotionCreation: PropTypes.func
    };

export default NewPotionControl;