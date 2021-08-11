import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Landing from './pages/Viewer/Landing';
import EndlessView from './pages/Viewer/EndlessView';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/endless' component={EndlessView} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
