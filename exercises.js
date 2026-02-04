// ============================================
// EvoRoutine - Exercise Library
// ============================================

const exerciseLibrary = {
    // CHEST EXERCISES
    chest: {
        gym: {
            strength: [
                { name: 'Bench Press', sets: 5, reps: 5, rest: 180, muscle: 'chest' },
                { name: 'Incline Barbell Press', sets: 4, reps: 6, rest: 150, muscle: 'chest' },
                { name: 'Weighted Dips', sets: 4, reps: 6, rest: 120, muscle: 'chest' }
            ],
            hypertrophy: [
                { name: 'Bench Press', sets: 4, reps: 10, rest: 90, muscle: 'chest' },
                { name: 'Incline Dumbbell Press', sets: 3, reps: 12, rest: 75, muscle: 'chest' },
                { name: 'Cable Flyes', sets: 3, reps: 15, rest: 60, muscle: 'chest' },
                { name: 'Dips', sets: 3, reps: 12, rest: 60, muscle: 'chest' }
            ],
            endurance: [
                { name: 'Push-ups', sets: 4, reps: 20, rest: 45, muscle: 'chest' },
                { name: 'Dumbbell Press', sets: 3, reps: 18, rest: 45, muscle: 'chest' },
                { name: 'Cable Crossovers', sets: 3, reps: 20, rest: 30, muscle: 'chest' }
            ]
        },
        home: {
            strength: [
                { name: 'Weighted Push-ups', sets: 5, reps: 8, rest: 120, muscle: 'chest' },
                { name: 'Decline Push-ups', sets: 4, reps: 10, rest: 90, muscle: 'chest' },
                { name: 'Diamond Push-ups', sets: 3, reps: 8, rest: 90, muscle: 'chest' }
            ],
            hypertrophy: [
                { name: 'Push-ups', sets: 4, reps: 15, rest: 60, muscle: 'chest' },
                { name: 'Wide Push-ups', sets: 3, reps: 15, rest: 60, muscle: 'chest' },
                { name: 'Archer Push-ups', sets: 3, reps: 10, rest: 75, muscle: 'chest' }
            ],
            endurance: [
                { name: 'Push-ups', sets: 5, reps: 25, rest: 30, muscle: 'chest' },
                { name: 'Knee Push-ups', sets: 4, reps: 30, rest: 30, muscle: 'chest' }
            ]
        }
    },

    // BACK EXERCISES
    back: {
        gym: {
            strength: [
                { name: 'Deadlift', sets: 5, reps: 5, rest: 180, muscle: 'back' },
                { name: 'Barbell Row', sets: 4, reps: 6, rest: 150, muscle: 'back' },
                { name: 'Weighted Pull-ups', sets: 4, reps: 5, rest: 150, muscle: 'back' }
            ],
            hypertrophy: [
                { name: 'Pull-ups', sets: 4, reps: 10, rest: 90, muscle: 'back' },
                { name: 'Barbell Row', sets: 4, reps: 10, rest: 75, muscle: 'back' },
                { name: 'Lat Pulldown', sets: 3, reps: 12, rest: 60, muscle: 'back' },
                { name: 'Seated Cable Row', sets: 3, reps: 12, rest: 60, muscle: 'back' }
            ],
            endurance: [
                { name: 'Pull-ups', sets: 4, reps: 15, rest: 45, muscle: 'back' },
                { name: 'Cable Row', sets: 3, reps: 20, rest: 45, muscle: 'back' },
                { name: 'Face Pulls', sets: 3, reps: 20, rest: 30, muscle: 'back' }
            ]
        },
        home: {
            strength: [
                { name: 'Pull-ups', sets: 5, reps: 6, rest: 120, muscle: 'back' },
                { name: 'Inverted Rows', sets: 4, reps: 8, rest: 90, muscle: 'back' },
                { name: 'Weighted Superman', sets: 3, reps: 10, rest: 75, muscle: 'back' }
            ],
            hypertrophy: [
                { name: 'Pull-ups', sets: 4, reps: 10, rest: 75, muscle: 'back' },
                { name: 'Inverted Rows', sets: 4, reps: 12, rest: 60, muscle: 'back' },
                { name: 'Superman', sets: 3, reps: 15, rest: 60, muscle: 'back' }
            ],
            endurance: [
                { name: 'Assisted Pull-ups', sets: 4, reps: 20, rest: 45, muscle: 'back' },
                { name: 'Superman', sets: 4, reps: 25, rest: 30, muscle: 'back' }
            ]
        }
    },

    // LEG EXERCISES
    legs: {
        gym: {
            strength: [
                { name: 'Back Squat', sets: 5, reps: 5, rest: 180, muscle: 'legs' },
                { name: 'Romanian Deadlift', sets: 4, reps: 6, rest: 150, muscle: 'legs' },
                { name: 'Leg Press', sets: 4, reps: 6, rest: 120, muscle: 'legs' }
            ],
            hypertrophy: [
                { name: 'Squat', sets: 4, reps: 10, rest: 90, muscle: 'legs' },
                { name: 'Leg Press', sets: 4, reps: 12, rest: 75, muscle: 'legs' },
                { name: 'Leg Curl', sets: 3, reps: 12, rest: 60, muscle: 'legs' },
                { name: 'Leg Extension', sets: 3, reps: 15, rest: 60, muscle: 'legs' }
            ],
            endurance: [
                { name: 'Goblet Squat', sets: 4, reps: 20, rest: 45, muscle: 'legs' },
                { name: 'Walking Lunges', sets: 3, reps: 30, rest: 45, muscle: 'legs' },
                { name: 'Step-ups', sets: 3, reps: 25, rest: 30, muscle: 'legs' }
            ]
        },
        home: {
            strength: [
                { name: 'Pistol Squats', sets: 4, reps: 6, rest: 120, muscle: 'legs' },
                { name: 'Bulgarian Split Squats', sets: 4, reps: 8, rest: 90, muscle: 'legs' },
                { name: 'Nordic Curls', sets: 3, reps: 6, rest: 120, muscle: 'legs' }
            ],
            hypertrophy: [
                { name: 'Squats', sets: 4, reps: 15, rest: 60, muscle: 'legs' },
                { name: 'Lunges', sets: 4, reps: 12, rest: 60, muscle: 'legs' },
                { name: 'Bulgarian Split Squats', sets: 3, reps: 12, rest: 60, muscle: 'legs' }
            ],
            endurance: [
                { name: 'Squats', sets: 5, reps: 30, rest: 30, muscle: 'legs' },
                { name: 'Jumping Lunges', sets: 4, reps: 40, rest: 30, muscle: 'legs' },
                { name: 'Wall Sit', sets: 3, reps: 60, rest: 30, muscle: 'legs' }
            ]
        }
    },

    // SHOULDER EXERCISES
    shoulders: {
        gym: {
            strength: [
                { name: 'Overhead Press', sets: 5, reps: 5, rest: 150, muscle: 'shoulders' },
                { name: 'Barbell Front Raise', sets: 4, reps: 6, rest: 120, muscle: 'shoulders' },
                { name: 'Heavy Lateral Raises', sets: 4, reps: 8, rest: 90, muscle: 'shoulders' }
            ],
            hypertrophy: [
                { name: 'Dumbbell Press', sets: 4, reps: 10, rest: 75, muscle: 'shoulders' },
                { name: 'Lateral Raises', sets: 4, reps: 12, rest: 60, muscle: 'shoulders' },
                { name: 'Front Raises', sets: 3, reps: 12, rest: 60, muscle: 'shoulders' },
                { name: 'Reverse Flyes', sets: 3, reps: 15, rest: 45, muscle: 'shoulders' }
            ],
            endurance: [
                { name: 'Arnold Press', sets: 3, reps: 20, rest: 45, muscle: 'shoulders' },
                { name: 'Lateral Raises', sets: 4, reps: 20, rest: 30, muscle: 'shoulders' },
                { name: 'Face Pulls', sets: 3, reps: 25, rest: 30, muscle: 'shoulders' }
            ]
        },
        home: {
            strength: [
                { name: 'Pike Push-ups', sets: 4, reps: 8, rest: 90, muscle: 'shoulders' },
                { name: 'Handstand Push-ups', sets: 3, reps: 5, rest: 120, muscle: 'shoulders' },
                { name: 'Planche Leans', sets: 3, reps: 10, rest: 90, muscle: 'shoulders' }
            ],
            hypertrophy: [
                { name: 'Pike Push-ups', sets: 4, reps: 12, rest: 60, muscle: 'shoulders' },
                { name: 'Lateral Raises', sets: 4, reps: 15, rest: 60, muscle: 'shoulders' }
            ],
            endurance: [
                { name: 'Pike Push-ups', sets: 5, reps: 20, rest: 30, muscle: 'shoulders' },
                { name: 'Arm Circles', sets: 4, reps: 30, rest: 20, muscle: 'shoulders' }
            ]
        }
    },

    // ARM EXERCISES
    arms: {
        gym: {
            strength: [
                { name: 'Barbell Curl', sets: 4, reps: 6, rest: 120, muscle: 'arms' },
                { name: 'Close-grip Bench', sets: 4, reps: 6, rest: 120, muscle: 'arms' },
                { name: 'Hammer Curls', sets: 3, reps: 8, rest: 90, muscle: 'arms' }
            ],
            hypertrophy: [
                { name: 'Barbell Curl', sets: 3, reps: 10, rest: 60, muscle: 'arms' },
                { name: 'Tricep Dips', sets: 3, reps: 12, rest: 60, muscle: 'arms' },
                { name: 'Hammer Curls', sets: 3, reps: 12, rest: 60, muscle: 'arms' },
                { name: 'Tricep Pushdown', sets: 3, reps: 15, rest: 45, muscle: 'arms' }
            ],
            endurance: [
                { name: 'Cable Curls', sets: 4, reps: 20, rest: 30, muscle: 'arms' },
                { name: 'Tricep Extensions', sets: 4, reps: 20, rest: 30, muscle: 'arms' }
            ]
        },
        home: {
            strength: [
                { name: 'Chin-ups', sets: 4, reps: 6, rest: 120, muscle: 'arms' },
                { name: 'Diamond Push-ups', sets: 4, reps: 8, rest: 90, muscle: 'arms' }
            ],
            hypertrophy: [
                { name: 'Chin-ups', sets: 4, reps: 10, rest: 75, muscle: 'arms' },
                { name: 'Diamond Push-ups', sets: 3, reps: 12, rest: 60, muscle: 'arms' },
                { name: 'Dips', sets: 3, reps: 12, rest: 60, muscle: 'arms' }
            ],
            endurance: [
                { name: 'Push-up Pyramid', sets: 3, reps: 30, rest: 30, muscle: 'arms' },
                { name: 'Dips', sets: 4, reps: 25, rest: 30, muscle: 'arms' }
            ]
        }
    },

    // CORE EXERCISES
    core: {
        gym: {
            strength: [
                { name: 'Ab Wheel', sets: 4, reps: 10, rest: 90, muscle: 'core' },
                { name: 'Hanging Leg Raises', sets: 4, reps: 12, rest: 75, muscle: 'core' },
                { name: 'Cable Crunches', sets: 3, reps: 15, rest: 60, muscle: 'core' }
            ],
            hypertrophy: [
                { name: 'Cable Crunches', sets: 4, reps: 15, rest: 60, muscle: 'core' },
                { name: 'Hanging Knee Raises', sets: 3, reps: 15, rest: 60, muscle: 'core' },
                { name: 'Russian Twists', sets: 3, reps: 20, rest: 45, muscle: 'core' }
            ],
            endurance: [
                { name: 'Plank', sets: 4, reps: 60, rest: 30, muscle: 'core' },
                { name: 'Mountain Climbers', sets: 4, reps: 40, rest: 30, muscle: 'core' },
                { name: 'Bicycle Crunches', sets: 3, reps: 50, rest: 30, muscle: 'core' }
            ]
        },
        home: {
            strength: [
                { name: 'L-Sit Hold', sets: 4, reps: 30, rest: 90, muscle: 'core' },
                { name: 'Hanging Leg Raises', sets: 4, reps: 10, rest: 75, muscle: 'core' }
            ],
            hypertrophy: [
                { name: 'Crunches', sets: 4, reps: 20, rest: 45, muscle: 'core' },
                { name: 'Leg Raises', sets: 3, reps: 15, rest: 60, muscle: 'core' },
                { name: 'Russian Twists', sets: 3, reps: 25, rest: 45, muscle: 'core' }
            ],
            endurance: [
                { name: 'Plank', sets: 5, reps: 60, rest: 20, muscle: 'core' },
                { name: 'Mountain Climbers', sets: 4, reps: 50, rest: 30, muscle: 'core' },
                { name: 'Bicycle Crunches', sets: 4, reps: 60, rest: 30, muscle: 'core' }
            ]
        }
    },

    // CARDIO
    cardio: {
        gym: {
            strength: [
                { name: 'Sprint Intervals', sets: 8, reps: 30, rest: 120, muscle: 'cardio' },
                { name: 'Rowing Machine', sets: 6, reps: 60, rest: 90, muscle: 'cardio' }
            ],
            hypertrophy: [
                { name: 'Treadmill Intervals', sets: 10, reps: 60, rest: 60, muscle: 'cardio' },
                { name: 'Bike Sprints', sets: 8, reps: 45, rest: 60, muscle: 'cardio' }
            ],
            endurance: [
                { name: 'Steady State Run', sets: 1, reps: 1800, rest: 0, muscle: 'cardio' },
                { name: 'Elliptical', sets: 1, reps: 1200, rest: 0, muscle: 'cardio' }
            ]
        },
        home: {
            strength: [
                { name: 'Burpees', sets: 6, reps: 10, rest: 90, muscle: 'cardio' },
                { name: 'Jump Squats', sets: 5, reps: 15, rest: 90, muscle: 'cardio' }
            ],
            hypertrophy: [
                { name: 'Jumping Jacks', sets: 5, reps: 30, rest: 45, muscle: 'cardio' },
                { name: 'High Knees', sets: 5, reps: 40, rest: 45, muscle: 'cardio' }
            ],
            endurance: [
                { name: 'Running in Place', sets: 4, reps: 120, rest: 30, muscle: 'cardio' },
                { name: 'Jump Rope', sets: 5, reps: 180, rest: 30, muscle: 'cardio' }
            ]
        }
    }
};

class ExerciseManager {
    constructor() {
        this.library = exerciseLibrary;
    }

    getExercises(muscleGroup, environment, goal) {
        if (!this.library[muscleGroup]) return [];
        if (!this.library[muscleGroup][environment]) return [];
        if (!this.library[muscleGroup][environment][goal]) return [];

        return this.library[muscleGroup][environment][goal];
    }

    getAllExercises(environment = null, goal = null) {
        const exercises = [];

        Object.keys(this.library).forEach(muscle => {
            if (environment && goal) {
                if (this.library[muscle][environment] && this.library[muscle][environment][goal]) {
                    exercises.push(...this.library[muscle][environment][goal]);
                }
            } else if (environment) {
                if (this.library[muscle][environment]) {
                    Object.keys(this.library[muscle][environment]).forEach(g => {
                        exercises.push(...this.library[muscle][environment][g]);
                    });
                }
            } else {
                Object.keys(this.library[muscle]).forEach(env => {
                    Object.keys(this.library[muscle][env]).forEach(g => {
                        exercises.push(...this.library[muscle][env][g]);
                    });
                });
            }
        });

        // Remove duplicates by name
        const unique = [];
        const seen = new Set();
        exercises.forEach(ex => {
            if (!seen.has(ex.name)) {
                seen.add(ex.name);
                unique.push(ex);
            }
        });

        return unique;
    }

    searchExercises(query, environment = null, muscleGroup = null) {
        let exercises = this.getAllExercises(environment);

        if (muscleGroup && muscleGroup !== 'all') {
            exercises = exercises.filter(ex => ex.muscle === muscleGroup);
        }

        if (query) {
            const lowerQuery = query.toLowerCase();
            exercises = exercises.filter(ex =>
                ex.name.toLowerCase().includes(lowerQuery)
            );
        }

        return exercises;
    }

    createWorkout(environment, level, goal, muscleGroups = ['chest', 'back', 'legs']) {
        const workout = [];
        const exercisesPerMuscle = level === 'beginner' ? 2 : level === 'intermediate' ? 3 : 4;

        muscleGroups.forEach(muscle => {
            const exercises = this.getExercises(muscle, environment, goal);
            if (exercises.length > 0) {
                // Take first N exercises for the workout
                workout.push(...exercises.slice(0, exercisesPerMuscle));
            }
        });

        return workout;
    }

    adjustForLevel(exercise, level) {
        const adjusted = { ...exercise };

        if (level === 'beginner') {
            adjusted.sets = Math.max(2, Math.floor(exercise.sets * 0.7));
            adjusted.reps = Math.max(5, Math.floor(exercise.reps * 0.7));
            adjusted.rest = exercise.rest + 30;
        } else if (level === 'advanced') {
            adjusted.sets = exercise.sets + 1;
            adjusted.reps = Math.floor(exercise.reps * 1.2);
            adjusted.rest = Math.max(30, exercise.rest - 15);
        }

        return adjusted;
    }
}

const exerciseManager = new ExerciseManager();
