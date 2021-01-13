const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
})

require('./routes/apiRoutes.js')(app)
require('./routes/htmlRoutes.js')(app,path)

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});