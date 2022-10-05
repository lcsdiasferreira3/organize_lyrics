<template>
  <v-app-bar elevation="4" height="60%" dark>
    <v-col cols="12">
      <v-row class="d-flex justify-center align-center">
        <v-col cols="2" class="d-flex justify-end align-center">
          <img src="../assets/music.png" width="70px" />
        </v-col>
        <v-col cols="4" class="mt-7">
          <v-text-field
            single-line
            solo-inverted
            v-model="search"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="d-flex align-center pl-0 pr-0">
          <v-btn icon @click="getLyric()"><v-icon>mdi-magnify</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },

  methods: {
    getLyric() {
      this.$store
        .dispatch("getLyrics", {
          id: this.search,
        })
        .then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style>
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  transition: 0.5s !important;
}
</style>
