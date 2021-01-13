const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a name for the exercise'
    },
    type: {
        type: String,
        enum: ['lift', 'cardio'],
        lowercase: true,
        required: 'Did you lift or do cardio?'
    },
    weight: {
        type: Number,
        
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;