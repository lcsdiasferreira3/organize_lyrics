<template>
  <v-content class="back">
    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <v-row class="d-flex justify-center">
            <v-col cols="7"
              ><div>
                <v-card dark>
                  <v-card-title class="d-flex justify-center"
                    >Customize the Lyric</v-card-title
                  >
                  <v-divider></v-divider>
                  <v-card-title>Music</v-card-title>
                  <v-divider></v-divider>
                  <v-card-subtitle class="pb-0">teste</v-card-subtitle>
                  <v-card-subtitle class="pt-0">teste</v-card-subtitle>
                  <v-divider></v-divider>
                </v-card></div
            ></v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col cols="7"
              ><div>
                <v-card dark>
                  <v-card-title class="d-flex justify-center"
                    >List of the Songs to export</v-card-title
                  >
                  <v-divider></v-divider>
                  <v-card-title>1# Music</v-card-title>
                  <v-card-subtitle class="">teste</v-card-subtitle>
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                  <v-card-title>2# Music</v-card-title>
                  <v-card-subtitle class="">teste</v-card-subtitle>
                  <v-divider></v-divider>
                </v-card></div
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-center">
            <v-col cols="9">
              <v-card dark min-height="500px">
                <v-card-title class="d-flex justify-center">Songs</v-card-title>
                <v-divider></v-divider>
                <div class="d-flex align-center justify-center siz">
                  <v-card-subtitle>Search for any song!</v-card-subtitle>
                </div>
              </v-card>
            </v-col>
          </div></v-col
        >
      </v-row>
    </v-col>
  </v-content>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.back {
  background: linear-gradient(to bottom, #025159, #7ec8d9);
  height: 100vh;
}
.siz {
  height: 500px;
  width: 100%;
}
</style>
