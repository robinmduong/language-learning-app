const router = require('express').Router();
let ChineseWord = require('../models/chinese-word.model');

router.route('/').get((req, res) => {
    ChineseWord.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const word = req.body.word;
    const pinyin = req.body.pinyin;
    const zhuyin = req.body.zhuyin;
    const definedExample = req.body.definedExample;
    const image = req.body.image;

    const newChineseWord = new ChineseWord({
        word,
        pinyin,
        zhuyin,
        definedExample,
        image
    });

    newChineseWord.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;