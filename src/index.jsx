import React from 'react';
import { render } from 'react-dom';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';

const App = () => (
  <>
    <Header/>
    <Footer/>
  </>
);

render(<App />, document.querySelector('#app'));
