<template>
  <v-app>
    <div><NavBar /></div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/navBar.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar },
};
</script>
