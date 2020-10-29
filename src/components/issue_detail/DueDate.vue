<template>
  <div class="due-date-section">
    <h5>DUE DATE</h5>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn min-width="290px" color="#eee" v-bind="attrs" v-on="on">{{
          date
        }}</v-btn>
      </template>
      <v-date-picker
        v-model="date"
        @input="menu = true"
        class="mt-1"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
  props: ['date'],
  data: () => ({
    menu: false,
  }),
};
</script>

<style lang="scss" scoped>
.due-date-section {
  padding: 0 35px;
}
</style>
