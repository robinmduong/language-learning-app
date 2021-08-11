// import React from 'react';
// import axios from 'axios';

// class GetAllFlashcards extends React.Component {
//     state = {
//         simplifiedWord: '',
//         traditionalWord: '',
//         pinyin: '',
//         zhuyin: '',
//         definition: '',
//         sentence: '',
//         sentenceTranslation: '',
//         partsOfSpeech: '',
//         image: ''
//     };

//     componentDidMount = () => {
//         this.getFlashCards();
//     }

//     getFlashCards = () => {
//         axios.get('http://localhost:3000/chinese-words')
//             .then((response) => {
//                 const data = response.data;
//                 console.log('Data from Get All Flashcards: ', data)
//                 this.setState({ simplifiedWord: data })
//                 console.log('Chinese words data has been received!')
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }
// }

// export default GetAllFlashcards