<template>
  <main>
    <h3 class="instruction">Click for Random Exercise</h3>
    <div class="main-section">
      <div style="text-align: center">
        <h3 class="sets">{{ sets }}</h3>
        <h3 class="reps" style="font-size: 17px; margin-top: -26px">
          {{ leftText }}
        </h3>

        <div class="line"></div>
      </div>

      <div class="start-search" @click="generateExercise">
        <img src="../assets/start_icon.png" alt="Start icon" class="start-icon" v-if="exerciseGenerated" />
        <div v-else>
          <h3 class="chosen-exercise">{{ showExercise }}</h3>
        </div>
      </div>

      <div style="text-align: center">
        <h3 class="reps">{{ reps }}</h3>
        <h3 class="reps" style="font-size: 17px; margin-top: -26px">
          {{ rightText }}
        </h3>
        <div class="line"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("../styles/Basic.scss");
</style>

<script>
import exercises from "../utils/exercises"
export default {
  data() {
    return {
      exerciseGenerated: true,
      sets: "#",
      reps: "#",
      //& Reps - low - 5 - 10
      //& Reps - med - 10 - 30
      //& Reps - high - 30 - 60
      //---------------
      //& timing - low - 10 - 30
      //& timing - mid - 30 - 60
      //& timing - low - 60 - 90
      //second high - 30 - 60 seconds
      exercises,
      chosenExercise: "",
      rightText: "reps",
      leftText: "sets",
    };
  },

  methods: {
    generateExercise() {
      this.exerciseGenerated = false;
      let randomExercise = Math.floor(Math.random() * this.exercises.length);
      let chosenExercise = (this.chosenExercise =
        this.exercises[randomExercise]);

      //Calculating reps
      if (chosenExercise.timing === "reps") {
        this.rightText = "reps";
        let range = chosenExercise.range;
        let reps = 0;
        switch (range) {
          case "low":
            reps = "5-10";
            break;
          case "mid":
            reps = "10-30";
            break;
          case "high":
            reps = "30-50";
            break;
        }
        this.reps = reps;
      } else if (chosenExercise.timing === "seconds") {
        let seconds;
        this.rightText = "seconds";
        let range = this.chosenExercise.range;
        switch (range) {
          case "low":
            seconds = "10-30";
            break;
          case "mid":
            seconds = "30-60";
            break;
          case "high":
            seconds = "60-90";
            break;
        }
        this.reps = seconds;
        console.log("seconds");
      }

      // calculating set

      this.sets = Math.floor(Math.random() * 3) + 1;
      this.sets === 1 ? (this.leftText = "set") : (this.leftText = "sets");
    },
  },



  computed: {
    showExercise() {
      return this.chosenExercise.name;
    },
  },
};
</script>