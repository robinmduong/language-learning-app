import React, { Component } from 'react';
// import Canvas from './Canvas';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="home-wrapper page-wrapper">
                <p>Welcome back to the number-one language learning stop!</p>
                <p>What do you feel like doing?</p>
                <ul>
                    <li><a href="/flashcards">Flipping Over Things . . . (┛ಠ_ಠ)┛彡┻━┻</a></li>
                    <li><a href="/flashcards">Studying Flashcards . . .  ≧◉◡◉≦</a></li>
                    <li><a href="/flashcards">Procrastinating . . . . . . . . (๑ᵕ⌓ᵕ̤)</a></li>
                </ul>
            </div>
            {/* <Canvas /> */}
            </React.Fragment>
        )
    }
}

export default Home;