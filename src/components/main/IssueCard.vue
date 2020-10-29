<template>
  <div>
    <v-card class="issue-card mb-3" elevation="1" @click="openDatail">
      <h4>{{ issue.title }}</h4>
      <div class="icon-wrapper"></div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['issue'],
  methods: {
    openDatail() {
      this.$store.commit('setCurrentIssue', this.issue);
      this.$store.commit('toggleIsDetailShow');
    },
  },
};
</script>

<style lang="scss" scoped>
.issue-card {
  padding: 10px;
}
</style>
