import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages';
import visualizar from './pages/visualizar.jsx'
import Guias from './pages/contratarGuias'
function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/visualizar/:id"  component={visualizar}/>
    <Route path="/contratarGuias"component={Guias}/>
    </Switch> 
     </Router>
  );
}

export default App;
