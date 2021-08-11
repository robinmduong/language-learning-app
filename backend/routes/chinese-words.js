const router = require('express').Router();
let ChineseWord = require('../models/chinese-word.model');

router.route('/').get((req, res) => {
    ChineseWord.find()
        .then(chineseword => res.json(chineseword))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const traditionalWord = req.body.traditionalWord;
    const simplifiedWord = req.body.simplifiedWord;
    const pinyin = req.body.pinyin;
    const zhuyin = req.body.zhuyin;
    const definition = req.body.definition;
    const sentence = req.body.sentence;
    const sentenceTranslation = req.body.sentenceTranslation;
    const partsOfSpeech = req.body.partsOfSpeech;
    const image = req.body.image;

    const newChineseWord = new ChineseWord({
        traditionalWord, 
        simplifiedWord,
        pinyin,
        zhuyin,
        definition,
        sentence,
        sentenceTranslation,
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
router.route('/:id').delete((req, res) => {
    ChineseWord.findByIdAndDelete(req.params.id)
        .then(() => res.json('Chinese Word Deleted.'))
        .catch(err => res.status(400).json('Error: ', err));
})

// Update Chinese Word By Id
router.route('/update/:id').post((req, res) => {
    ChineseWord.findById(req.params.id)
        .then(chineseword => {
            chineseword.word = req.body.word;
            chineseword.pinyin = req.body.pinyin;
            chineseword.zhuyin = req.body.zhuyin;
            chineseword.definition = req.body.definition;
            chineseword.sentence = req.body.sentence;
            chineseword.image = req.body.image

            chineseword.save()
                .then(() => res.json('Chinese Word Updated'))
                .catch((err) => res.status(400).json('Error: ', err));
        })
        .catch(err => res.status(404).json('Error: ', err));
})

module.exports = router;