const router = require("express").Router();
const Exercise = require("../models/exercise.js");

router.post("/api/exercise", ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});