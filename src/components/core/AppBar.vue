<template>
  <v-row align="center">
    <v-app-bar color="#fff" flat dark height="60">
      <v-btn color="#5390b3" min-width="40" class="pa-0">
        <v-icon>mdi-dots-grid</v-icon>
      </v-btn>
      <v-btn color="#5390b3" min-width="40" class="pa-0">
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn prepend-inner-icon="mdi-map-marker" color="#5390b3">Boards</v-btn>
      <!-- <v-text-field
        label=""
        solo
        class="input-box"
        background-color="#5390b3"
        append-icon="mdi-magnify"
      ></v-text-field> -->
      <v-spacer></v-spacer>
      ><v-img
        max-width="120"
        src="https://d2k1fgv7pobq7.cloudfront.net/meta/u/res/image"
        alt="logo"
      ></v-img>

      <v-spacer></v-spacer>

      <v-btn color="#5390b3" min-width="40" class="pa-0">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <v-btn color="#5390b3">
        <v-avatar><v-img src=""></v-img></v-avatar>
      </v-btn>

      <v-btn color="#5390b3" min-width="40" class="pa-0">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </v-row>
</template>

<script>
export default {
  name: 'CoreAppBar',
};
</script>

<style lang="scss" scoped>
.input-box {
  max-width: 300px !important;
}
.v-input__control {
  max-height: 30px;
  padding: 0;
  margin: 0;
}
</style>
