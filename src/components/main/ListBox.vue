<template>
  <v-card class="list-box">
    <v-row class="box-header" align="center" no-gutters>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </v-row>
    <div class="item-list-wrapper">
      <issue-card
        :title="issue.title"
        v-for="(issue, i) in issues"
        :key="i"
      ></issue-card>
    </div>
    <div class="btn-wrapper">
      <v-btn text color="#5e6c84"><v-icon>mdi-plus</v-icon> Add a card</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'ListBox',
  props: ['title', 'issues'],
  components: {
    IssueCard: () => import('@/components/main/IssueCard.vue'),
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  margin: 10px;
  background: #ebecf0;
}
.box-header {
  padding: 5px 20px;
  h2 {
    font-size: 1.3rem;
  }
}
.item-list-wrapper {
  padding: 5px;
}
.btn-wrapper {
  padding: 5px;
}
</style>
