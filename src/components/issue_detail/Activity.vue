<template>
  <div class="activity mt-8">
    <v-row no-gutters align="center" class="activity-header">
      <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
      <h5>Activity</h5>
      <v-spacer></v-spacer>
      <v-btn class="ml-2" depressed color="#eaecef">Show Details</v-btn>
    </v-row>
    <div class="activity-field">
      <v-avatar color="#dfe1e6">LT</v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
};
</script>

<style lang="scss" scoped></style>
