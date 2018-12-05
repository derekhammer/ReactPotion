import React from 'react';
import Header from './Header';
import PotionList from './PotionList';
import NewPotionControl from './NewPotionControl';
import { Switch, Route } from 'react-router-dom'; 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPotionList: []
    };
    this.handleAddingNewPotionToList = this.handleAddingNewPotionToList.bind(this);
  }

  handleAddingNewPotionToList(newPotion){
    var newMasterPotionList = this.state.masterPotionList.slice();
    newMasterPotionList.push(newPotion);
    this.setState({masterPotionList: newMasterPotionList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PotionList potionList={this.state.masterPotionList} />} />
          <Route path='/newpotion' render={()=><NewPotionControl onNewPotionCreation={this.handleAddingNewPotionToList} />} />
        </Switch>
      </div>
    );
  }

}

export default App;