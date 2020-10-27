<template>
  <v-card class="issue-card" elevation="1">
    <h4>{{ title }}</h4>
    <div class="icon-wrapper"></div>
  </v-card>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.issue-card {
  padding: 10px;
}
</style>
