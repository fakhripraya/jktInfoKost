import React from 'react';
import './App.css';
import Spinner from './Spinner';
import {
  Route,
  Switch
} from 'react-router-dom';
import {
  TheHome,
  TheDashboard,
  TheLogin
} from './services/route'

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={TheLogin} />
        <Route exact path="/" name="Home" component={TheHome} />
        <Route exact path="/dashboard" name="Dashboard" component={TheDashboard} />
      </Switch>
    </React.Suspense>
  );
}

export default App;
