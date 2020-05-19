const router = require('express').Router();

const { getLastWorkout, addExercise, createWorkout, getWorkoutsInRange } = require('./../../controllers/workoutController')

router.route('/workouts')
    .get(getLastWorkout)
    .post(createWorkout)

router.put('/workouts/:id', addExercise)

router.get('/workouts/range', getWorkoutsInRange)

module.exports = router;