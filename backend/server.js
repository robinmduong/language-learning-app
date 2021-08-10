const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //get "uri" from MongoDB dashboard
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// some things are depreciated, so use the above "useNewUrlParser" and "useCreateIndex"

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const chineseWordsRouter = require('./routes/chinese-words');
const usersRouter = require('./routes/users');

app.use('/chinese-words', chineseWordsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})