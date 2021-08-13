const router = require('express').Router();
let ChineseWord = require('../models/chinese-word.model');

// Get All Chinese Words
router.route('/').get((req, res) => {
    ChineseWord.find()
        .then(chineseword => res.json(chineseword))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add Chinese word
router.route('/add').post((req, res) => {
    const simplifiedWord = req.body.simplifiedWord;
    const traditionalWord = req.body.traditionalWord;
    const pinyin = req.body.pinyin;
    const zhuyin = req.body.zhuyin;
    const definition = req.body.definition;
    const simplifiedSentence = req.body.simplifiedSentence;
    const traditionalSentence = req.body.traditionalSentence;
    const translatedSentence = req.body.translatedSentence;
    const partsOfSpeech = req.body.partsOfSpeech;
    const image = req.body.image;

    const newChineseWord = new ChineseWord({
        simplifiedWord,
        traditionalWord, 
        pinyin,
        zhuyin,
        definition,
        simplifiedSentence,
        traditionalSentence,
        translatedSentence,
        partsOfSpeech,
        image
    });

    newChineseWord.save()
        .then(() => res.json('Chinese word added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Chinese Word By Id
router.route('/:id').get((req, res) => {
    ChineseWord.findById(req.params.id)
        .then(chineseword => res.json(chineseword))
        .catch(err => res.status(400).json('Error: ', err));
})

// Delete Chinese Word By Id
router.route('/delete/:id').delete((req, res) => {
    ChineseWord.findByIdAndDelete(req.params.id)
        .then(() => res.json('Chinese Word Deleted.'))
        .catch(err => res.status(400).json('Error: ', err));
})

// Update Chinese Word By Id
router.route('/update/:id').post((req, res) => {
    ChineseWord.findById(req.params.id)
        .then(chineseword => {
            chineseword.simplifiedWord = req.body.simplifiedWord;
            chineseword.traditionalWord = req.body.traditionalWord;
            chineseword.pinyin = req.body.pinyin;
            chineseword.zhuyin = req.body.zhuyin;
            chineseword.definition = req.body.definition;
            chineseword.simplifiedSentence = req.body.simplifiedSentence;
            chineseword.traditionalSentence = req.body.traditionalSentence;
            chineseword.translatedSentence = req.body.translatedSentence;
            chineseword.sentence = req.body.sentence;
            chineseword.image = req.body.image;
            chineseword.wordAudio = req.body.wordAudio;
            chineseword.sentenceAudio = req.body.sentenceAudio;

            chineseword.save()
                .then(() => res.json('Chinese Word Updated'))
                .catch((err) => res.status(400).json('Error: ', err));
        })
        .catch(err => res.status(404).json('Error: ', err));
})

module.exports = router;