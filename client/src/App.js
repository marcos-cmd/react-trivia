import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Landing from './pages/Viewer/Landing';
import EndlessView from './pages/Viewer/EndlessView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/endless' component={EndlessView} />
      </Switch>
    </Router>

  );
}

export default App;
