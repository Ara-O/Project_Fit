<template>
  <main>
    <router-link to="/" class="nav_link"> Basic </router-link>
    <router-link to="/" class="nav_link"> Advanced </router-link>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px
}
.nav_link {
  margin-right: 0px;
  padding-right: 70px;
}
</style>