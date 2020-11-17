import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import './App.css';
import Landing from './pages/Viewer/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      <Route exact path='/'>
      </Route>
    </Router>

  );
}

export default App;
