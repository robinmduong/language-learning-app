import React, { Component } from 'react';
import SingleFlashcard from './SingleFlashcard';

export default function FlashcardList() {
    return (
        <React.Fragment>
            <a href="/flashcards/add"><button>Add Flashcard</button></a>
            <p>This is temporary</p>
        </React.Fragment>
    )
}

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