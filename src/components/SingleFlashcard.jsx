import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Flashcard({ flashcard }) {

    function deleteFlashcard(id) {

        axios.delete(`http://localhost:3000/chinese-words/delete/${id}`)
            .then(
                res => (console.log(res.data))
            )
            .catch(
                err => (console.log(err.data))
            )
            window.location = '/flashcards'; // take the user back to list of flashcards

    }

    const [flip, setFlip] = useState(true);
    
    return (
        <React.Fragment>
        <div
            className="flashcard"
        >
            <div className="card-button">
                {console.log("FLASHCARD: ", flashcard._id)}
                <Link to={"flashcards/edit/"+flashcard._id}><button className="edit-card-button">Edit</button></Link>
                <button onClick={() => {deleteFlashcard(flashcard._id)}} className="delete-card-button">Delete</button>
            </div>
            <div className="flashcard-text 'flip' ? 'flip' : ''"
                 onClick={() => setFlip(!flip)}
            >
                {flip ?
                    //Front of Flashcard
                    <div className="question-wrapper">
                        <p className="simplifiedWord">{flashcard.simplifiedWord ? flashcard.simplifiedWord + " (S)" : ""}</p>
                        <p className="traditionalWord">{flashcard.traditionalWord ? flashcard.traditionalWord + " (T)" : ""}</p>
                    </div>
                    :
                    //Back of Flashcard
                    <div className="answer-wrapper">
                        <div className="definition-wrapper">
                            <p className="definition">{flashcard.definition ? flashcard.definition : ''}</p>
                        </div>
                        <div className="phonetic-wrapper">
                            <p className="zhuyin">{flashcard.zhuyin ? flashcard.zhuyin : ''}</p>
                            <p className="pinyin">{flashcard.pinyin ? flashcard.pinyin : ''}</p>
                        </div>
                        <p className="partOfSpeech">{flashcard.partOfSpeech ? flashcard.partOfSpeech + " " + flashcard.definition : ''}</p>
                        <hr />
                        <div className="sentence-wrapper">
                            <p className="traditionalSentence">{flashcard.traditionalSentence ? flashcard.traditionalSentence + '(T)': ''}</p>
                            <p className="simplifiedSentence">{flashcard.simplifiedSentence ? flashcard.simplifiedSentence + '(S)': ''}</p>
                            <p className="translatedSentence">{flashcard.translatedSentence ? flashcard.translatedSentence : ''}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
        </React.Fragment>
    )
}