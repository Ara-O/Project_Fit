<template>
  <main>
    <div class="inputs">
      <div class="exercise-inputs input">
        <h3>How many exercises</h3>
        <input
          type="number"
          class="exercise-input"
          placeholder="0"
          ref="numberOfExercises"
          :max="exercises.length"
          min="0"
        />
      </div>
      <div class="input">
        <h3>
          Difficulty rating <br />
          ( 1 - 5 )
        </h3>
        <input
          type="number"
          max="5"
          min="0"
          class="exercise-input"
          placeholder="0"
          ref="difficultyRating"
        />
      </div>
      <div class="input">
        <h3>Rest Time <br />( in seconds )</h3>
        <input
          type="number"
          class="exercise-input"
          placeholder="0"
          ref="restTime"
          min="0"
        />
      </div>
      <button @click="formWorkout" class="workout-btn" type="submit">
        Create Workout
      </button>
    </div>
    <br />
    <div class="workout">
      <div class="arrange-workout">
        <h3>Note: If you can do more, do more! If not, there's no shame in stopping with a few reps/seconds short</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
@font-face {
  font-family: "Poppins";
  src: url("../../public/poppins/Poppins-Light.ttf");
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 71vh;
}

.inputs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 85px;
  row-gap: 30px;
  align-items: center;
}

.inputs div {
  height: 216px;
  flex-direction: column;
  background: white;
  width: 217px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: -3px -3px 7px #eeeeeeb2, 4px 4px 5px rgb(218 218 219 / 95%);
  box-sizing: border-box;
  padding: 30px;
}

.exercise-inputs {
  text-align: center;
}

.input h3 {
  font-size: 17px;
  width: auto;
  text-align: center;
}

.exercise-input {
  border-width: 0px 0px 1px 0px;
  width: 113px;
  margin-top: 11px;
  border-color: lightgray;
  text-align: center;
  font-family: "Poppins";
  font-size: 30px;
  color: #606060;
}

.exercise-input:focus {
  outline: none;
}

.workout-btn {
  background: gray;
  height: 46px;
  width: 151px;
  color: white;
  font-family: "Poppins";
  border: none;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 3px #8a8a8a;
  cursor: pointer;
  transition: all 200ms linear;
}

.workout {
  height: 50vh;
  display: flex;
  justify-content: center;
}

.workout-btn:hover {
  transform: scale(1.05);
}

.arrange-workout {
  height: 300px;
  width: 1067px;
  background: white;
  box-shadow: -3px -3px 7px #eeeeeeb2, 4px 4px 5px rgb(218 218 219 / 95%);
  border-radius: 6px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
  row-gap: 12px;
  margin-top: 83px;
  flex-direction: column;
}
</style>

<script>
export default {
  data() {
    return {
      exercises: [
        { name: "Jumping Jacks", timing: "seconds", range: "high" },
        { name: "Punches", timing: "seconds", range: "mid" },
        { name: "Burpees", timing: "seconds", range: "mid" },
        { name: "Plank", timing: "seconds", range: "mid" },
        { name: "High Knees", timing: "reps", range: "mid" },
        { name: "Push-ups", timing: "reps", range: "mid" },
        { name: "Squats", timing: "reps", range: "high" },
        { name: "Pull-ups ( or renegade rows )", timing: "reps", range: "low" },
        { name: "Chin-ups", timing: "reps", range: "low" },
        { name: "Mountain Climbers", timing: "seconds", range: "high" },
        { name: "Sit-ups", timing: "reps", range: "high" },
        { name: "Squat Jumps", timing: "reps", range: "low" },
        { name: "Lunges", timing: "reps", range: "mid" },
        { name: "Calf raises", timing: "reps", range: "mid" },
      ],
      chosenExercises: [],
    };
  },

  methods: {
    formWorkout() {
      // difficultyRating, restTime
      let numOfExercises = this.$refs.numberOfExercises.value;
      let difficultyRating = this.$refs.difficultyRating.value;
      let restTime = this.$refs.restTime.value;
      let currentExercise, exercise, randomNo;
      for (let i = 0; i < numOfExercises; i++) {
        currentExercise = {};
        randomNo = Math.floor(Math.random() * this.exercises.length);
        exercise = this.exercises[randomNo];
        currentExercise.name = exercise.name;
        currentExercise.timing = exercise.timing;
        if (exercise.timing === "reps") {
          let range = exercise.range;
          let reps = 0;
          switch (range) {
            case "low":
              reps = 5;
              break;
            case "mid":
              reps = 10;
              break;
            case "high":
              reps = 30;
              break;
          }
          exercise.reps = reps * difficultyRating;
        } else if (exercise.timing === "seconds") {
          let seconds = 0;
          let range = exercise.range;
          switch (range) {
            case "low":
              seconds = 10;
              break;
            case "mid":
              seconds = 30;
              break;
            case "high":
              seconds = 60;
              break;
          }
          exercise.seconds = seconds * difficultyRating;
        }

console.log(exercise)
        // -- make sure that each exercise is unique
        // if(this.chosenExercises.length > 1){
        //   for(let i = 0; i <this.chosenExercises)
        // }
      }
    },
  },
};
</script>