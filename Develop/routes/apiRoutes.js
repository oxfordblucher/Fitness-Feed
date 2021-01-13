const Exercise = require("../models/exercise.js");
const Workout = require("../models/workout.js");

module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .populate("exercises")
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.
}