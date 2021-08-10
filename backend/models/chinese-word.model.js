const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chineseWordSchema = new Schema({
    word: {
        type: String,
        required: true,
    },
    pinyin: {
        type: String,
        required: true
    },
    zhuyin: {
        type: String,
    },
    definedSentence: [{
        definition: {
            type: String,
        },
        sentence: {
            type: String,
        }
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