const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chineseWordSchema = new Schema({
    simplifiedWord: {
        type: String,
    },
    traditionalWord: {
        type: String,
    },
    pinyin: {
        type: String,
        required: true
    },
    zhuyin: {
        type: String,
    },
    definition: {
        type: String,
        required: true,
    },
    sentence: {
        type: String,
    },
    sentenceTranslation: {
        type: String,
    },
    partsOfSpeech: [{
        type: String,
    }],
    image: {
        data: Buffer,
        contentType: String
    },
}, {
    timestamps: true,
});

const ChineseWord = mongoose.model('ChineseWord', chineseWordSchema);

module.exports = ChineseWord;