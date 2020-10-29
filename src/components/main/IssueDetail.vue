<template>
  <v-overlay :value="isDetailShow">
    <div class="scroll-view">
      <v-card class="issue-detail-card" light>
        <div class="issue-detail-header">
          <h2><v-icon>mdi-inbox-full</v-icon>{{ issues.title }}</h2>
          <p>{{ issues.description }}</p>
          <v-btn class="close-btn" icon @click="closeDetail"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <v-row>
          <v-col cols="8" class="left-side pr-4">
            <due-date :date="date"></due-date>
            <Description></Description>
            <check-list :checklist="checklist"></check-list>
            <Activity :activity="activity"></Activity>
          </v-col>
          <v-col cols="4">
            <Actions></Actions>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex';
// vuex를 통해서 오버레이 팝업 기능 구현(컴포넌트 간의 통신)
export default {
  name: 'IssueDetail',
  props: ['issues', 'date', 'activity'],
  components: {
    DueDate: () => import('@/components/issue_detail/DueDate.vue'),
    Description: () => import('@/components/issue_detail/Description.vue'),
    CheckList: () => import('@/components/issue_detail/CheckList.vue'),
    Activity: () => import('@/components/issue_detail/Activity.vue'),
    Actions: () => import('@/components/issue_detail/Actions.vue'),
  },
  methods: {
    closeDetail() {
      this.$store.commit('toggleIsDetailShow');
    },
  },
  computed: { ...mapState(['isDetailShow']) },
};
</script>

<style lang="scss" scoped>
.scroll-view {
  max-height: 90vh;
  overflow-y: auto;
}
.issue-detail-card {
  max-width: 800px;
  width: 100vw;
  overflow-y: auto;
  background: #f4f5f7;
  padding: 20px;
}
.issue-detail-header {
  position: relative;
  display: inline-block;
  width: 100%;
}
p {
  margin-left: 20px;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 0;
}
.inner-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left-box {
    width: 80%;
  }
  .right-box {
    width: 20%;
    display: flex;
    flex-direction: column;
  }
}
</style>
