var db = require("../models");
const { update } = require("../models/workout");

module.exports = function (app) {

    //Used to get last workout from last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((workout) => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //create new workout in db
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(response);
        }
        catch (err) {
            console.log(err);
        }
    })

    //used to add exercise to a workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        const workoutID = params.id;
        let savedExercises = [];

        //get all current exercises in current workout.
        db.Workout.find({ id: workoutID })
            .then(dbWorkout => {
                savedExercises = db.Workout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body];
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.jsonerr(err);
            });
        
        function updateWorkout(exercises) {
            db.workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
                if(err) {
                    console.log(err)
                }
            })
        }
    })

    app.get("api/workouts/range", (req, res) => {
        db.workout.find({})
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};