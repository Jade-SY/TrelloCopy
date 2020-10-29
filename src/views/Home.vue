<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
    <issue-detail
      v-for="(issue, i) in issues"
      :key="i"
      :issues="issue"
      :date="issue.date"
      :activity="issue.activity"
    ></issue-detail>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/View.vue'),
    IssueDetail: () => import('@/components/main/IssueDetail.vue'),
  },
  computed: { ...mapState(['issues']) },
};
</script>
