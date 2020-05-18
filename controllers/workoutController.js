const Workout = require('./../models/workout')

module.exports = {
    getLastWorkout: async (req, res) => {
        try {
            const lastWorkout = await Workout.find({})
            return res.status(200).json(lastWorkout)
        } catch(e) {
            return res.status(403).json({ e })
        }
    },
    addExercise: async (req, res) => {
        const { id } = req.params
        let data = req.body;
        try {
            const newExercise = await Workout.findByIdAndUpdate( id, {$push: {exercises:  [
                {
                "type" : data.type,
                "name" : data.name,
                "duration" : data.duration,
                "distance" : data.distance,
                "weight" : data.weight,
                "reps" : data.reps,
                "sets" : data.sets
                }
            ] 
            }}, { new: true })
            console.log('hit', newExercise)
            return res.status(200).json(newExercise)
        } catch (e) {
            return res.status(403).json({ e })
        }
        // const data = req.body
        // console.log(data.name)
        // try {
        //     // updateOne only returns old object
        //     // Use findOneAndUpdate to return updated object
        //     const newExercise = await Workout.findOneAndUpdate({ _id: id }, {exercise: [{
        //         type: data.type,
        //         name: data.name,
        //         duration: data.duration,
        //         weight: data.weight,
        //         reps: data.reps,
        //         sets: data.sets
        //     }]}, { returnNewDocument: true })
        //     console.log(newExercise)
        //     return res.status(200).json(newExercise)
        // } catch(e) {
        //     return res.status(403).json({ e })
        // }
    },
    createWorkout: async (req, res) => {
        // const data = req.body
        // console.log('data', data)
        try{
            const newWorkout = await new Workout().save()
            return res.status(200).json(newWorkout)
        } catch(e) {
            return res.status(403).json({ e })
        }
    },
    getWorkoutsInRange: async (req, res) => {
        try {
            const lastWorkout = await Workout.find({})
            return res.status(200).json(lastWorkout)
        } catch(e) { 
            return res.status(403).json({ e })
        }
    }
        
}