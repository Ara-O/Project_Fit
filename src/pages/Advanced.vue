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
          min="1"
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
          min="1"
          value="1"
          class="exercise-input"
          placeholder="1"
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
          max="500"
        />
      </div>
      <button
        @click.once="formWorkout"
        :disabled="btnIsDisabled"
         type="submit"
        :class="btnIsDisabled ? 'disabled-btn' : 'workout-btn'"
      >
        Create Workout
      </button>
    </div>
    <br />
    <div class="workout" style="display: none">
      <div class="arrange-workout">
        <div class="notes">
          <div class="note-information">
            <img
              src="../assets/help_icon.png"
              alt="Help"
              class="help-icon"
              @mouseover="moreInfo"
              @mouseleave="lessInfo"
            />
            <div class="more-info">
              <h3>More info</h3>
              <hr />
              <h4>Click the rest period between sets to start a countdown</h4>
              <hr>
              <h4>Refresh the page to create another workout!</h4>
            </div>
          </div>
          <h3 class="note">
            Note: If you can do more, do more! If not, there's no shame in
            stopping with a few reps/seconds short. Hover over the help icon to
            the left for more info!
          </h3>
        </div>
        <!-- !Loop through exercises -->
        <div class="full-workout">
          <div
            v-for="exercise in chosenExercises"
            :key="exercise.id"
            class="exercise-cycle"
          >
            <workout :exercise="exercise"></workout>
            <div class="rest-time rest" @click.once="startRestTimer">
              <h4
                style="margin: 0px; font-size: 16px; color: gray"
                class="rest-time-seconds rest"
              >
                {{ exercise.rest }}s
              </h4>
              <img
                src="../assets/clock_icon.png"
                alt="Clock icon"
                class="rest-time-clock rest"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("../styles/Advanced.scss");
</style>

<script>
import workout from "../components/Workout.vue";
export default {
  components: {
    workout,
  },

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
      restTime: 0,
      btnIsDisabled: false,
    };
  },

  methods: {
    formWorkout() {
      // this.resetUI();
      this.btnIsDisabled = true;
      this.chosenExercises = [];
      // difficultyRating, restTime
      let numOfExercises = this.$refs.numberOfExercises.value;
      let difficultyRating = this.$refs.difficultyRating.value;
      let restTime = (this.restTime = this.$refs.restTime.value);

      let currentExercise, exercise, randomNo;
      for (let i = 0; i < numOfExercises; i++) {
        currentExercise = {};
        randomNo = Math.floor(Math.random() * this.exercises.length);
        exercise = this.exercises[randomNo];
        currentExercise.name = exercise.name;
        currentExercise.timing = exercise.timing;
        exercise.rest = restTime;
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
        console.log(exercise);
        this.chosenExercises.push(exercise);
      }

      document.querySelector(".workout").style.display = "block";
    },

    moreInfo() {
      document.querySelector(".more-info").style.display = "flex";
    },

    lessInfo() {
      document.querySelector(".more-info").style.display = "none";
    },

    stopTimer() {
      console.log("ber");
    },

    startRestTimer(e) {
      console.log("start timer");
      let currentRestTime = e.target;
      let restTimeSeconds = currentRestTime.children[0];
      if (currentRestTime.classList.contains("rest")) {
        let secondsElement_div = currentRestTime.closest("div");
        let secondsElement = secondsElement_div.querySelector("h4");
        let seconds = parseInt(secondsElement.textContent);

        seconds--;
        secondsElement.textContent = `${seconds}s`;

        let timerInterval = window.setInterval(() => {
          if (seconds > 0) {
            seconds--;
            secondsElement.textContent = `${seconds}s`;
          } else {
            console.log("bg");
            secondsElement_div.style.background = "#cfcfcf";
            secondsElement.style.color = "white";
            clearInterval(timerInterval);
          }
        }, 1000);
      }
    },
  },
};
</script>