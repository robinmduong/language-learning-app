import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './App';

import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
      <Header />
      <div className='page-contents'>
        <App />
      </div>
      <Footer />
  </Router>,
  document.getElementById('root')
);