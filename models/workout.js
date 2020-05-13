const { Scheema, model } = require('mongoose');

const workoutSchema = new Schema({
    day:{
        type: Date,
        // required: [true, 'You must provide a day']
    },
    exercises:{
        type: Array
    }
})

module.exports = model('Workout', workoutSchema)