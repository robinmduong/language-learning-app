import React, { Component, useState } from 'react';

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false);
    
    return (
        <div
            className="flashcard 'flip' ? 'flip' : ''"
            onClick={() => setFlip(!flip)}
        >
            {flip ?
                <div className="answer-wrapper">
                    <div className="phonetic-wrapper">
                        <p className="zhuyin">{flashcard.zhuyin ? flashcard.zhuyin : ''}</p>
                        <p className="pinyin">{flashcard.pinyin ? flashcard.pinyin : ''}</p>
                    </div>
                    <p className="partOfSpeech">{flashcard.partOfSpeech ? flashcard.partOfSpeech + " " + flashcard.definition : ''}</p>
                    <hr />
                    <div className="sentence-wrapper">
                        <p className="traditionalSentence">{flashcard.traditionalSentence ? flashcard.traditionalSentence + '(trad.)': ''}</p>
                        <p className="simplifiedSentence">{flashcard.simplifiedSentence ? flashcard.simplifiedSentence + '(simp.)': ''}</p>
                        <p className="translatedSentence">{flashcard.translatedSentence ? flashcard.translatedSentence : ''}</p>
                    </div>
                </div>
                :
                <div class="question-wrapper">
                    <p className="traditionalWord">{flashcard.traditionalWord ? flashcard.traditionalWord + " (trad.)" : ""}</p>
                    <p className="simplifiedWord">{flashcard.simplifiedWord ? flashcard.simplifiedWord + " (simp.)" : ""}</p>
                </div>
            }
        </div>
    )
}