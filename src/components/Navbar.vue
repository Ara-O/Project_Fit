<template>
  <main>
    <span>
      <div class="indicator"></div>
      <router-link to="/" class="nav_link"> Basic Mode </router-link>
    </span>
    <span>
      <div class="indicator"></div>
      <router-link to="/" class="nav_link"> Advanced Mode </router-link>
    </span>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.nav_link {
  margin-right: 50px;
  font-size: 15.5px;
  padding-right: 90px;
  color: black;
  text-decoration: none;
}

.indicator {
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  background: rgb(66, 66, 66);
  transition: all 300ms ease-in-out;
}

.widen {
  transition: all 300ms ease-in-out;
  width: 50px;
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