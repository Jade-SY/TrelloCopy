<template>
  <div class="check-list mt-8">
    <v-row no-gutters align="center" class="check-list-header">
      <v-icon class="mr-2">mdi-checkbox-marked-outline</v-icon>
      <h5>Checklist</h5>
      <v-spacer></v-spacer>
      <v-btn class="ml-2" depressed width="0" color="#eaecef">Delete</v-btn>
    </v-row>
    <div class="check-list-field">
      <v-row no-gutters align="center" class="mt-3">
        <span style="margin-right:10px; font-size:12px;">{{ progress }}%</span>
        <v-col>
          <v-progress-linear
            color="grey"
            rounded
            :value="progress"
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <div class="checkbox-list-wrapper">
        <v-checkbox
          v-for="(task, i) in tasks"
          :key="i"
          height="10"
          v-model="task.complete"
          :label="task.title"
          class="check-list-item mt-2 mb-0 pa-0"
        ></v-checkbox>
      </div>
      <div class="buttons-wrapper">
        <v-btn class="ml-8" depressed small color="#eaecef">Add an item</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['tasks'],
  data() {
    return {};
  },
  computed: {
    progress() {
      let completeNum = this.tasks.filter((el) => el.complete).length;
      return (completeNum / this.tasks.length) * 100;
    },
  },
};
</script>

<style lang="scss" scoped></style>
