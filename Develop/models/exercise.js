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
        required: 'Will you lift or do cardio?'
    },
    weight: {
        type: Number,
        required: 'Enter 0 for cardio exercises'
    },
    sets: {
        type: Number,
        required: 'Enter 0 for cardio exercises'
    },
    reps: {
        type: Number,
        required: 'Enter 0 for cardio exercises'
    },
    duration: {
        type: Number,
        required: 'How long is this workout?'
    },
    distance: {
        type: Number,
        required: 'Enter 0 for lift exercises'
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;