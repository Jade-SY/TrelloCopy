<template>
  <div class="description mt-8">
    <v-row no-gutters align="center" class="desc-header">
      <v-icon class="mr-3">mdi-text-subject</v-icon>
      <h5>Description</h5>
      <v-btn class="ml-3" depressed width="0" color="#eaecef">Edit</v-btn>
    </v-row>
    <div class="desc-field">
      <p>this is description</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
};
</script>

<style lang="scss" scoped>
.desc-field p {
  margin: 2px 0 0;
  padding: 0 0 0 30px;
}
</style>
