<template>
  <v-content class="background" id="backNotDropZone">
    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <v-row class="d-flex justify-center">
            <v-col cols="7"
              ><div>
                <v-card dark min-height="200px">
                  <v-card-title class="d-flex justify-center"
                    >Customize the Lyric</v-card-title
                  >

                  <v-divider></v-divider>
                  <Dnd :id="'board-1'">
                    <!-- <span v-if="this.lyrics"> -->
                    <!-- <CardDnd :id="'card-1'" :draggable="true"> -->
                    <!-- <v-card-title>Music</v-card-title>
                        <v-divider></v-divider>
                        <v-card-subtitle class="pb-0">{{
                          this.lyrics.lyrics_body
                        }}</v-card-subtitle>
                        <v-divider></v-divider> -->

                    <!-- </CardDnd> -->
                    <!-- </span> -->
                    <div v-if="!this.lyrics" class="size2" id="dropZoneStyle">
                      Drop the track here
                    </div>
                  </Dnd>
                </v-card>
              </div></v-col
            >
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
                  <v-card-subtitle class="subtitle">teste</v-card-subtitle>
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                  <v-card-title>2# Music</v-card-title>
                  <v-card-subtitle class="subtitle">teste</v-card-subtitle>
                  <v-divider></v-divider>
                </v-card></div
            ></v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-center">
            <v-col cols="9">
              <v-card dark max-height="550px" min-height="500px" class="scroll">
                <v-card-title class="d-flex justify-center"
                  >Available Songs</v-card-title
                >
                <v-divider></v-divider>
                <div
                  class="d-flex align-center justify-center size1"
                  v-if="!this.tracks"
                >
                  <v-card-subtitle class="subtitle">{{
                    this.result
                  }}</v-card-subtitle>
                </div>
                <div v-if="this.tracks">
                  <span v-for="(itens, index) in tracks" :key="index">
                    <CardDnd :id="index" :draggable="true" class="cursor">
                      <v-card-title
                        >{{ index + 1 }}# {{ itens.title }}</v-card-title
                      >
                      <v-card-subtitle class="subtitle">{{
                        itens.band
                      }}</v-card-subtitle>
                    </CardDnd>
                    <v-divider></v-divider>
                    <v-divider></v-divider>
                  </span>
                </div>
              </v-card>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-content>
</template>

<script>
import Dnd from "../components/dnd.vue";
import CardDnd from "../components/cardDnd.vue";

export default {
  name: "Home",

  data() {
    return {
      lyrics: null,
      result: "Search for any song!",
      tracks: null,
    };
  },

  components: {
    Dnd,
    CardDnd,
  },

  watch: {
    "$store.state.vagalume.dataTrack": function () {
      this.tracks = this.$store.state.vagalume.dataTrack.data.response.docs;
    },
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(
    -45deg,
    rgb(238, 159, 147),
    #f02805,
    #025159,
    #7ec8d9
  );
  height: 100vh;
  background-size: 400% 400%;
}
.size1 {
  height: 430px;
  width: 100%;
}
.subtitle {
  color: rgb(169, 164, 164);
}
.scroll {
  overflow: auto;
}
.size2 {
  height: 135px;
  color: rgb(169, 164, 164);
  justify-content: center;
  align-items: center;
  display: flex;
}
.hide {
  display: none;
}

.musicAfterDrop {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.cursor {
  cursor: pointer;
}

.backWithError {
  background: linear-gradient(
    -45deg,
    rgb(238, 159, 147),
    #f02805,
    #025159,
    #7ec8d9
  );
  height: 100vh;
  background-size: 400% 400%;
  animation: backwithError 2s ease forwards;
}

@keyframes backwithError {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.backWithoutError {
  background: linear-gradient(
    -45deg,
    rgb(238, 159, 147),
    #f02805,
    #025159,
    #7ec8d9
  );
  height: 100vh;
  background-size: 400% 400%;
  animation: backwithoutError 2s ease forwards;
}

@keyframes backwithoutError {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.greenAlert {
  animation: greenAlertDotted 1s infinite;
}

@keyframes greenAlertDotted {
  0% {
    border: 6px dashed green;
  }
  50% {
    border: none;
  }
  100% {
    border: 6px dashed green;
  }
}
</style>
