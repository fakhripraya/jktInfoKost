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
  TheLogin,
  TheRegister,
  TheSuper
} from './services/route'

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" name="Home" component={TheHome} />
        <Route exact path="/login" name="Login Page" component={TheLogin} />
        <Route exact path="/register" name="Register Page" component={TheRegister} />
        <Route exact path="/dashboard" name="Dashboard" component={TheDashboard} />
        <Route exact path="/papi/su/log/super" name="Papi" component={TheSuper} />
      </Switch>
    </React.Suspense >
  );
}

export default App;
