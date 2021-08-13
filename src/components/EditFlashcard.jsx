import React, { Component } from "react";
import axios from 'axios';

class EditFlashcard extends Component {

    constructor(props) {
        super(props);

        // Bindings so "this" refers to the CreatFlashcard class
        this.onChangeSimplifiedWord = this.onChangeSimplifiedWord.bind(this);
        this.onChangeTraditionalWord = this.onChangeTraditionalWord.bind(this);
        this.onChangePinyin = this.onChangePinyin.bind(this);
        this.onChangeZhuyin = this.onChangeZhuyin.bind(this);
        this.onChangeDefinition = this.onChangeDefinition.bind(this);
        this.onChangeSimplifiedSentence = this.onChangeSimplifiedSentence.bind(this);
        this.onChangeTraditionalSentence = this.onChangeTraditionalSentence.bind(this);
        this.onChangeTranslatedSentence = this.onChangeTranslatedSentence.bind(this);
        this.onChangePartsOfSpeech = this.onChangePartsOfSpeech.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeWordAudio = this.onChangeWordAudio.bind(this);
        this.onChangeSentenceAudio = this.onChangeSentenceAudio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            simplifiedWord: '',
            traditionalWord: '', 
            pinyin: '',
            zhuyin: '',
            definition: '',
            simplifiedSentence: '',
            traditionalSentence: '',
            translatedSentence: '',
            partsOfSpeech: [],
            image: '',
            wordAudio: '',
            sentenceAudio: '',
        }
    }

    // Called before anything displays on pg
    componentDidMount() {
        console.log('Props: ', this.props)
        axios.get('http://localhost:3000/chinese-words/' + this.props.match.params.id) // go to the route to edit by ID
            .then(response => {
                this.setState({
                    simplifiedWord: response.data.simplifiedWord,
                    traditionalWord: response.data.traditionalWord,
                    pinyin: response.data.pinyin,
                    zhuyin: response.data.zhuyin,
                    definition: response.data.definition,
                    simplifiedSentence: response.data.simplifiedSentence,
                    traditionalSentence: response.data.traditionalSentence,
                    translatedSentence: response.data.translatedSentence,
                    partsOfSpeech: response.data.partsOfSpeech,
                    image: response.data.image,
                    wordAudio: response.data.wordAudio,
                    sentenceAudio: response.data.sentenceAudio
                })
            })
            .catch(err => {
                console.log("Error: ", err.data)
            })
            
        axios.get('http://localhost:5000/chinese-words/')
            .then(response => {
                if (response.data.length > 0) {
                    console.log("Response.Data: ", response.data)
                    // this.setState({
                    //     chineseWords: response.data.map(chineseWord => chineseWord.traditionalWord)
                    // })
                }
            })
            .catch((err) => {
                console.log(err.data)
            })
    }

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
    
    onChangeSimplifiedSentence(e) {
        this.setState({
            simplifiedSentence: e.target.value
        })
    }
    
    onChangeTraditionalSentence(e) {
        this.setState({
            traditionalSentence: e.target.value
        })
    }
    
    onChangeTranslatedSentence(e) {
        this.setState({
            translatedSentence: e.target.value
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

    onChangeWordAudio(e) {
        this.setState({
            wordAudio: e.target.value
        })
    }

    onChangeSentenceAudio(e) {
        this.setState({
            sentenceAudio: e.target.value
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
            simplifiedSentence: this.state.simplifiedSentence,
            traditionalSentence: this.state.traditionalSentence,
            translatedSentence: this.state.translatedSentence,
            partsOfSpeech: this.state.partsOfSpeech,
            image: this.state.image,
            wordAudio: this.state.wordAudio,
            sentenceAudio: this.state.sentenceAudio
        }
        
        // Retrieve the ID
        const flashcard_id = this.props.match.params.id;
        console.log(flashcard_id);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
          
        axios.post('http://localhost:3000/chinese-words/update/' + flashcard_id, chineseWord, axiosConfig)
            .then(
                res => console.log(res.data)
            )
            .catch(
                err => console.log('Error: ', err.response)
        );

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
                        <label>Simplified Sentence: </label>
                        <textarea
                            className="form-control"
                            value={this.state.simplifiedSentence}
                            onChange={this.onChangeSimplifiedSentence}
                        />
                    </div>
                    <div className="form-group">
                        <label>Traditional Sentence: </label>
                        <textarea
                            className="form-control"
                            value={this.state.traditionalSentence}
                            onChange={this.onChangeTraditionalSentence}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sentence Translation: </label>
                        <textarea
                            className="form-control"
                            value={this.state.translatedSentence}
                            onChange={this.onChangeTranslatedSentence}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Part(s) of Speech: </label>
                        <textarea
                            className="form-control"
                            value={this.state.partsOfSpeech}
                            onChange={this.onChangePartsOfSpeech}
                        />
                    </div> */}
                    {/* <div className="form-group">
                        <label>Image Upload: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
                    <div className="form-group">
                        <label>Word Audio Upload: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.wordAudio}
                            onChange={this.onChangeWordAudio}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sentence Audio Upload: </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.sentenceAudio}
                            onChange={this.onChangeSentenceAudio}
                        />
                    </div> */}

                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Update Word"
                            className="btn submit-button"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditFlashcard