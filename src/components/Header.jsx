import React, { Component } from 'react'
import '../app.css';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <a href='/'>Home</a>
                    <a href='/flashcards'>Flashcards</a>
                    <a href='/contact'>Contact</a>
                    <a href='/about'>About</a>
                    <a href='/features'>Features</a>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;