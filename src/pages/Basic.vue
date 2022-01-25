<template>
  <main>
    <h3 class="instruction">Click for Random Exercise</h3>
    <div class="main-section">
      <div class="sets"></div>
      <div class="start-search" @click="generateExercise">
        <img
          src="../assets/start_icon.png"
          alt="Start icon"
          class="start-icon"
          v-if="exerciseGenerated"
        />
        <div v-else>
          <h3>habaa</h3>
        </div>
      </div>
      <div class="reps"></div>
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
    };
  },

  methods: {
    generateExercise() {
      this.exerciseGenerated = false;
    },
  },
};
</script>