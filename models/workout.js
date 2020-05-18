const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now(),
    },
    exercises:[{
        type: {
            type: String,
            trim: true,
            required: [true, 'Please enter an exercise type']
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'Please enter an exercise name']
        },
        duration: {
            type: Number,
            required: [true, 'Please enter a duration']
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
})

module.exports = model('Workout', workoutSchema)