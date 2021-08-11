import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './app.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FlashcardList from './components/FlashcardList'

import CreateFlashcard from './components/CreateFlashcard';
// import EditFlashcard from './components/EditFlashcard';
// import CreateUser from './components/CreateUser';
// import EditUser from './components/EditUser';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Router>
              <Route exact path='/' component={Home} />
              <Route exact path='/flashcards' component={FlashcardList} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              {/* <Route path='/flashcards/edit/:id' component={EditFlashcard} /> */}
              {/* <Route path='/users/edit/:id' component={EditUser} /> */}
              <Route exact path='/flashcards/add' component={CreateFlashcard} />
              {/* <Route path='/user/add' component={CreateUser} /> */}
          </Router>
        </React.Fragment>
    )
  }
}

export default App;