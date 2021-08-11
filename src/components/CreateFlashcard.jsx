import React, { Component } from "react";
import axios from 'axios';

class CreateFlashcard extends Component {

    constructor(props) {
        super(props);

        // Bindings so "this" refers to the CreatFlashcard class
        this.onChangeSimplifiedWord = this.onChangeSimplifiedWord.bind(this);
        this.onChangeTraditionalWord = this.onChangeTraditionalWord.bind(this);
        this.onChangePinyin = this.onChangePinyin.bind(this);
        this.onChangeZhuyin = this.onChangeZhuyin.bind(this);
        this.onChangeDefinition = this.onChangeDefinition.bind(this);
        this.onChangeSentence = this.onChangeSentence.bind(this);
        this.onChangeSentenceTranslation = this.onChangeSentenceTranslation.bind(this);
        this.onChangePartsOfSpeech = this.onChangePartsOfSpeech.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            simplifiedWord: '',
            traditionalWord: '', 
            pinyin: '',
            zhuyin: '',
            definition: '',
            sentence: '',
            sentenceTranslation: '',
            partsOfSpeech: [],
            image: ''
        }
    }

    // Called before anything displays on pg
    // componentDidMount() {
    // }

    // whenever someone adds something to the form, it calls this and set state:
    onChangeSimplifiedWord(e) {
        this.setState({
            simplifiedWord: e.target.value
        })
    }

    onChangeTraditionalWord(e) {
        this.setState({
            traditionalWord: e.target.value
        })
    }

    onChangePinyin(e) {
        this.setState({
            pinyin: e.target.value
        })
    }

    onChangeZhuyin(e) {
        this.setState({
            zhuyin: e.target.value
        })
    }

    onChangeDefinition(e) {
        this.setState({
            definition: e.target.value
        })
    }
    
    onChangeSentence(e) {
        this.setState({
            sentence: e.target.value
        })
    }
    onChangeSentenceTranslation(e) {
        this.setState({
            sentenceTranslation: e.target.value
        })
    }
    onChangePartsOfSpeech(e) {
        this.setState({
            partsOfSpeech: e.target.value
        })
    }
    
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault(); // prevent default, instead do what's below:

        const chineseWord = {
            simplifiedWord: this.state.simplifiedWord,
            traditionalWord: this.state.traditionalWord,
            pinyin: this.state.pinyin,
            zhuyin: this.state.zhuyin,
            definition: this.state.definition,
            sentence: this.state.sentence,
            sentenceTranslation: this.state.sentenceTranslation,
            partsOfSpeech: this.state.partsOfSpeech,
            image: this.state.image
        }
        
        console.log(chineseWord);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          
        axios.post('http://localhost:3000/chinese-words/add', chineseWord, axiosConfig)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ', err.response));

        //Send chinese word data to backend
        // axios.post('http://localhost:3000/chinese-words/add', chineseWord)
            // .then(res => console.log(res.data));

        window.location = '/flashcards'; // take the user back to list of flashcards
    }
    
    render() {
        return (
            <div>
                <h3>Add a New Flashcard</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Simplified Word: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.simplifiedWord}
                            onChange={this.onChangeSimplifiedWord} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Traditional Word: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.traditionalWord}
                            onChange={this.onChangeTraditionalWord}
                        />
                    </div>
                    <div className="form-group">
                        <label>Pinyin: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.pinyin}
                            onChange={this.onChangePinyin}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zhuyin: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.zhuyin}
                            onChange={this.onChangeZhuyin}
                        />
                    </div>
                    <div className="form-group">
                        <label>Definition: </label>
                        <textarea
                            required
                            className="form-control"
                            value={this.state.definition}
                            onChange={this.onChangeDefinition}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sentence: </label>
                        <textarea
                            className="form-control"
                            value={this.state.sentence}
                            onChange={this.onChangeSentence}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sentence Translation: </label>
                        <textarea
                            className="form-control"
                            value={this.state.sentenceTranslation}
                            onChange={this.onChangeSentenceTranslation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Part(s) of Speech: </label>
                        <textarea
                            className="form-control"
                            value={this.state.partsOfSpeech}
                            onChange={this.onChangePartsOfSpeech}
                        />
                    </div>
                    <div className="form-group">
                        <label>Image Upload: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Add New Word"
                            className="btn submit-button"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateFlashcard