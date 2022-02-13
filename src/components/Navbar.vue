<template>
  <section>
    <span>
      <router-link to="/" class="nav_link"> Basic Mode </router-link>
      <div class="indicator"></div>
    </span>
    <span>
      <router-link to="/Advanced" class="nav_link"> Advanced Mode </router-link>
      <div class="indicator"></div>
    </span>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: flex-end;
    padding-top: 40px;
    }

.nav_link {
  font-family: "Poppins Regular";
  margin-right: 50px;
  font-size: 15.5px;
  padding-right: 90px;
  color: rgb(85, 85, 85);
  text-decoration: none;
}

.indicator {
  width: 30px;
  height: 1px;
  margin-bottom: 5px;
  background: rgb(119 119 119);
  transition: all 300ms ease-in-out;
}

.widen {
  transition: all 300ms ease-in-out;
  width: 50px;
}

.current-link{
  color: black;
}
</style>

<script>
export default {
  mounted() {
    document.querySelectorAll(".nav_link").forEach((element) => {
      element.addEventListener("mouseover", () => {
        let parent = element.parentNode;
        parent.querySelector(".indicator").classList.add("widen");
      });
      element.addEventListener("mouseleave", () => {
        let parent = element.parentNode;
        parent.querySelector(".indicator").classList.remove("widen");
      });
    });
  },
};
</script>