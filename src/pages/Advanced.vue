<template>
  <main>
    <div class="inputs">
      <div class="exercise-inputs input">
        <h3>How many exercises</h3>
        <input
          type="text"
          class="exercise-input"
          value="0"
          ref="numberOfExercises"
        />
      </div>
      <div class="input">
        <h3>
          Difficulty rating <br />
          ( 1 - 5 )
        </h3>
        <input
          type="text"
          class="exercise-input"
          value="0"
          ref="difficultyRating"
        />
      </div>
      <div class="input">
        <h3>Rest Time <br />( in seconds )</h3>
        <input type="text" class="exercise-input" value="0" ref="restTime" />
      </div>

      <button @click="formWorkout" class="workout-btn">Create Workout</button>
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
  column-gap: 85px;
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
}
</style>

<script>
export default {
  methods: {
    formWorkout() {
      // difficultyRating, restTime
      console.log(this.$refs.numberOfExercises.value);
      console.log(this.$refs.difficultyRating.value);
      console.log(this.$refs.restTime.value);
    },
  },
};
</script>