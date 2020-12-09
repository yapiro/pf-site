import React from 'react';
import {HashRouter as Router,Route,withRouter} from 'react-router-dom'; 
import Home from './components/Home';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Twitter from './components/Twitter';
import Quiita from './components/Quiita';

function App(){
    return (
      <div>
        <Router history ={withRouter}>
          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/Profile" exact component = {Profile}></Route>
          <Route path = "/Skillportfolio" exact component = {Skill}></Route>
          <Route path = "/Twitter" exact component = {Twitter}></Route>
          <Route path = "/Quiita" exact component = {Quiita}></Route>
        </Router>
      </div>  
    );
}

export default App;