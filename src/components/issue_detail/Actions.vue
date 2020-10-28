<template>
  <div class="actions">
    <h5>ACTIONS</h5>
    <div class="actions-btn-wrapper">
      <v-btn elevation="0" color="#eaecef" block class="action-btn pl-3 mb-2"
        ><v-icon size="20" class="mr-2">mdi-arrow-right</v-icon> Move</v-btn
      >
      <v-btn elevation="0" color="#eaecef" block class="action-btn pl-3 mb-2"
        ><v-icon size="20" class="mr-2">mdi-content-copy</v-icon> Copy</v-btn
      >
      <v-btn elevation="0" color="#eaecef" block class="action-btn pl-3"
        ><v-icon size="22" class="mr-2">mdi-delete-outline</v-icon> Delete
        <v-spacer></v-spacer
      ></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actions',
};
</script>

<style lang="scss" scoped>
.action-btn {
  justify-content: flex-start;
}
</style>
