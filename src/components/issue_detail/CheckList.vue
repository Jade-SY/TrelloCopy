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
        <span style="margin-right:10px; font-size:12px;">0%</span>
        <v-col>
          <v-progress-linear
            v-model="progress"
            rounded
            value="100"
            color="grey"
            height="6"
          >
            <!-- <template v-slot:default="{ value }">
          <span>{{ Math.ceil(value) }}%</span>
        </template> -->
          </v-progress-linear>
        </v-col>
      </v-row>
      <v-checkbox height="10" v-model="checkbox" :label="'dd'"></v-checkbox>
      <v-btn class="ml-7" depressed color="#eaecef">Add an item</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  data() {
    return {
      progress: '',
      checkbox: false,
      tasks: [
        { title: 'task1', complete: false },
        { title: 'task2', complete: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
