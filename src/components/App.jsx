import React from "react";
import Header from "./Header";
import PotionList from "./PotionList";
import { Switch, Route } from 'react-router-dom';

function App(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={PotionList} />
          <Route path='/newpotion' component={NewPotionForm} />
        </Switch>
      </div>
    );
  }

export default App;