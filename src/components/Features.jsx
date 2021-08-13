import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div className="Features-wrapper page-wrapper">
                <p>Mandarin Chinese is a complex language, and yet, like code, it adheres to some very consistent and strict rules. Most of you won't ever use the phrase "lots of rules" and "lots of fun" in the same sentence, but that is the joy (and difficulty) of learning a language like Mandarin Chinese. Here is a list of features that we are considering building:</p>
                <table className="features-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Description</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Simple Flashcard</td>
                            <td>
                                <ul>
                                    <li>Flashcard web app with create, edit, and delete functions.</li>
                                    <li>MongoDB (Atlas) database for flexibility and web storage.</li>
                                </ul>
                            </td>
                            <td>In Progress</td>
                        </tr>
                        <tr>
                                <td>
                                    Advanced Flashcards
                                </td>
                                <td>
                                    <ul>
                                        <li>Record your own audio</li>
                                        <li>Add an image</li>
                                        <li>Add mnemonic devices</li>
                                    </ul>
                                </td>
                                <td>
                                    Planning
                                </td>
                            </tr>
                        <tr>
                            <td>Scoring System</td>
                            <td>
                                <ul>
                                    <li>Test sessions with scoring and tracking based on word status.</li>
                                    <li>Word can be categorized as:
                                        <table className="inner-table">
                                            <tr>
                                                <th>Know</th>
                                                <th>Don't Know</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <ol>
                                                        <li>Perfectly Remembered</li>
                                                        <li>Correct</li>
                                                        <li>Barely Remembered</li>
                                                    </ol>
                                                </td>
                                                <td>
                                                    <ol>
                                                        <li>Don't Know</li>
                                                        <li>Forgotten</li>
                                                        <li>Almost Remembered</li>
                                                    </ol>
                                                </td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li>Ability to view chart with statistics from test sessions.</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Writing Practice
                            </td>
                            <td>
                                <ul>
                                    <li>On-screen canvas for writing on or next to flashcard</li>
                                    <li>Toggle canvas with keyboard shortcut or click of a button</li>
                                    <li>Responsive design that is friendly on tablet or mobile</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Lecture Videos
                            </td>
                            <td>
                                <ul>
                                    <li>Pre-recorded lecture videos for studying anytime</li>
                                    <li>Free videos can be hosted via YouTube</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shortcut Keys
                            </td>
                            <td>
                                <ul>
                                    <li>Keyboard shortcuts for adding a card, erasing handwriting, deleting a card, flipping a card, etc.</li>
                                    <li>Pop-up keyboard shortcut modal</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Zhuyin (Bopomofo) Practice
                            </td>
                            <td>
                                <ul>
                                    <li>On-screen keyboard with Zhuyin characters</li>
                                    <li>Play an audio recording of the sound whenever a key is pressed</li>
                                    <li>Type in a sound such as "zhao3" and watch it being typed out and sounded out with the Zhuyin keyboard</li>
                                    <li>Flip the view to an Anglicized Zhuyin keyboard, where each Zhuyin key is replaced with the sound it makes. For example, the "T" key on the on-screen keyboard would be replaced with "Ch". (The "T" key on an American keyboard is the same key as the "ㄔ" key on a Zhuyin Keyboard, and "ㄔ" is associated with the "Ch" sound in Pinyin.)</li>
                                    <li>The 4 intonations of Mandarin Chinese have their own keys.</li>
                                    <li>For more information, <a href="https://en.wikipedia.org/wiki/Bopomofo" target="_blank">read this article on Wikipia about Bopomofo</a>, also known as Mandarin Phonetic Sounds, or Zhuyin.</li>
                                    <li>Disable keys that should not be clicked. Mandarin sounds follow very consistent patterns. For example, in Mandarin, a consonant sound such as "x", "t", or "w" must be followed with an ending sound that starts with a vowel, such as "a", "o", "ie", "ü (yu)", "ing", or "ang". If a user presses a consonant sound, it must be followed with at least one (and at most two) character sounds that begin with a vowel. Therefore, if the first key that a user presses is a consonant, we can gray out and disable all keys that are consonants.</li>
                                    <li>Note: Consonants and vowels are not clearly distinguished. For example, the ü (yu) sound in Mandarin can appear at the start, middle, or end of a word.</li>
                                    <li>Limit the length of the zhuyin to 4 characters. Two to three characters for the zhuyin characters, and the 4th character for the intonation symbol.</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ecommerce Store
                            </td>
                            <td>
                                <ul>
                                    <li>E-books, PDF files, and printable flashcards</li>
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Pinyin - Zhuyin - Mandarin Converter
                            </td>
                            <td>
                                <ul>
                                    <li>Convert typed pinyin (for example, xiao3) into stylized pinyin (xiǎo)</li>
                                    <li>Convert to zhuyin (ㄒㄧㄠˇ)</li> 
                                </ul>
                            </td>
                            <td>
                                Planning
                            </td>
                        </tr>
                        {/* Template
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                Planning
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Features;