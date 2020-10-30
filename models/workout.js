const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter name of exercise"
                },
                duration: {
                    type: Number,
                    required: "Enter how long exercise was in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                },
            }
        ]
    },
    {
        toJson: {
            // Includes virtual properties when data is required.
            virtual: true
        }
    }
);
// adds dynamic properties to Schema.
workoutSchema.virtual("totalDuration").get(function(){
    // reduce arry down to just the duration of the exercise
    return this.exercises.reduce((total, exercise) =>{
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
