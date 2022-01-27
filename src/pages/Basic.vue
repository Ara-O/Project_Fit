<template>
  <main>
    <h3 class="instruction">Click for Random Exercise</h3>
    <div class="main-section">
      <div style="text-align: center">
        <h3 class="sets">{{ sets }}</h3>
        <h3 class="reps" style="font-size: 17px; margin-top: -26px">set</h3>

        <div class="line"></div>
      </div>

      <div class="start-search" @click="generateExercise">
        <img
          src="../assets/start_icon.png"
          alt="Start icon"
          class="start-icon"
          v-if="exerciseGenerated"
        />
        <div v-else>
          <h3 class="chosen-exercise">{{ showExercise }}</h3>
        </div>
      </div>

      <div style="text-align: center">
        <h3 class="reps">{{ reps }}</h3>
        <h3 class="reps" style="font-size: 17px; margin-top: -26px">reps</h3>
        <div class="line"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("../styles/Basic.scss");
</style>

<script>
export default {
  data() {
    return {
      exerciseGenerated: true,
      sets: "#",
      reps: "#",
      // add object exercise range
      // add timing for seconds, till finished reps
      //& Reps - low - 5 - 10
      //& Reps - med - 11 - 29
      //& Reps - high - 30 - 60
      //---------------
      //& timing - low - 10 - 60
      //& timing - mid - 11 - 30
      //& timing - low - 30 - 120
      //second high - 30 - 60 seconds
      exercises: [
        { name: "Jumping Jacks", timing: "seconds", range: "high" },
        { name: "Punches", timing: "seconds", range: "mid" },
        { name: "Burpees", timing: "seconds", range: "mid" },
        { name: "Plank", timing: "seconds", range: "mid" },
        { name: "High Knees", timing: "reps", range: "mid" },
        { name: "Push-ups", timing: "reps", range: "mid" },
        { name: "Squats", timing: "reps", range: "high" },
        { name: "Pull-ups ( or renegade rows )", timing: "reps", range: "low" },
        { name: "Mountain Climbers", timing: "seconds", range: "high" },
        { name: "Sit-ups", timing: "reps", range: "mid" },
        { name: "Squat Jumps", timing: "reps", range: "mid" },
        { name: "Lunges", timing: "reps", range: "mid" },
        { name: "Calf raises", timing: "reps", range: "mid" },
      ],
      chosenExercise: "",
    };
  },

  methods: {
    generateExercise() {
      this.exerciseGenerated = false;
      let randomExercise = Math.floor(Math.random() * this.exercises.length);
      let chosenExercise = (this.chosenExercise =
        this.exercises[randomExercise]);
      if (chosenExercise.timing === "reps") {
        console.log("reps")
        let range = chosenExercise.range;
        let reps = 0;
        switch (range) {
          case "low":
            reps = "5-10";
            break;
          case "mid":
            reps = "11-30";
            break;
          case "high":
            reps = "31 - 50";
            break;
        }

        this.reps = reps;
      } else if (chosenExercise.timing === "seconds") {
        console.log("seconds");
      }
    },
  },

  computed: {
    showExercise() {
      return this.chosenExercise.name;
    },
  },
};
</script>