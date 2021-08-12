import React, { Component } from 'react';
import SingleFlashcard from './SingleFlashcard';
import axios from 'axios';

class FlashcardList extends React.Component {
    state = {
        flashcards: []
    };

    componentDidMount = () => {
        this.getFlashCards();
    }

    getFlashCards = () => {
        axios.get('http://localhost:3000/chinese-words')
            .then((response) => {
                const data = response.data;
                console.log('Data from Get All Flashcards: ', data)
                this.setState({ flashcards: data })
                console.log('Chinese words data has been received!')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // displayFlashcards = (flashcards) => {
    //     if (!flashcards.length) {
    //         return null;
    //     };

    //     return flashcards.map((flashcard, index) => {
    //         <div key={index}>
    //             <h3>{flashcard.traditionalWord}</h3>
    //             <p>{flashcard.simplifiedWord}</p>
    //             <p>{flashcard.definition}</p>
    //         </div>
    //     });
    // }

    render() {
        const flashcards = this.state.flashcards;
        console.log(flashcards)
        return (
            <React.Fragment>
                <a href="/flashcards/add"><button>Add Flashcard</button></a>
                {/* <div className="flashcards">
                    {this.displayFlashcards(this.state.flashcards)}
                </div> */}
                <div className="card-grid">
                    {flashcards.map(flashcard => {
                        return <SingleFlashcard 
                            flashcard={flashcard}
                            key={flashcard._id} 
                        />
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default FlashcardList;


// export default function FlashcardList() {
//     return (
//         <React.Fragment>
//             <a href="/flashcards/add"><button>Add Flashcard</button></a>
//             <p>This is temporary</p>
//         </React.Fragment>
//     )
// }

// export default function FlashcardList({ flashcards }) {
//     return (
//         <React.Fragment>
//             <a href="/flashcards/add"><button>Add Flashcard</button></a>
//             <div className="card-grid">
//                 {flashcards.map(flashcard => {
//                     return <SingleFlashcard flashcard={flashcard}
//                     key={flashcard.id} />
//                 })}
//             </div>
//         </React.Fragment>
//     )
// }