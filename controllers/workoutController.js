const { Workout } = require('./../models/workout')

module.exports = {
    getLastWorkout: async (req, res) => {
        try {
            const lastWorkout = await Workout.find()
            return res.stats(200).json(lastWorkout)
        } catch(e) {
            return res.status(403).json({ e })
        }
    },
    addExercise: async (req, res) => {
        const { day, exercises } = req.body;
        try {
            const newExercise
        } catch(e) {
            return res.status(403).json({ e })
        }
    }
}