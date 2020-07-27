import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='top-section'>
        <Switch>
            <Route component={Routes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
