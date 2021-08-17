
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { useState } from "react";
import "./App.scss";


import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import { AuthProvider } from './context/auth';
import AuthRoute from './helper/auth';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Sharing from './components/Sharing.jsx';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Container>
          <Nav />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );

}

export default App;