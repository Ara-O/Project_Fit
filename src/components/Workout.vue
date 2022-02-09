<template>
  <div class="full-exercise">
    <h3>Name: {{ exercise.name }}</h3>
    <div v-if="exercise.reps">
    <h3>Reps: {{ exercise.reps }}</h3>
    </div>
    <div v-else>
      <h3>Seconds: {{ exercise.seconds }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
};
</script>

<style scoped>
.full-exercise {
box-shadow: -2px -2px 7px #eeeeeeb2, 2px 2px 5px rgb(218 218 219 / 95%); 
   padding: 31px 30px;
    height: auto;
    width: 248px;
    box-sizing: border-box;
    border-radius: 7px;
}

.full-exercise h3{
    font-size: 15px;
    font-family:"Poppins-EL"
}
</style>