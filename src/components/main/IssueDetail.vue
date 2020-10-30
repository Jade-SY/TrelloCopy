<template>
  <v-overlay :value="isDetailShow">
    <div class="scroll-view">
      <v-card class="issue-detail-card" light>
        <div class="issue-detail-header">
          <h2><v-icon>mdi-inbox-full</v-icon>{{ currentIssue.title }}</h2>
          <p>in list {{ 'todo' }}</p>
          <v-btn class="close-btn" icon @click="closeDetail"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <v-row>
          <v-col cols="8" class="left-side pr-4">
            <due-date
              :init-date="currentIssue.dueDate"
              @change-date="changeDate"
            ></due-date>
            <!-- 이벤트버스사용. 이벤트명은 change-date처럼 케밥케이스가 바람직하며 props명은 자식컴포넌트에서 정하고 부모가 받는반면 이벤트명은 부모에서 먼저 정하고 자식에게 전해도 된다 -->
            <Description
              :init-descr="currentIssue.description"
              @change-descr="changeDescr"
            ></Description>
            <check-list :tasks="currentIssue.checklist"></check-list>
            <Activity :activities="currentIssue.activities"></Activity>
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
import _ from 'lodash';

export default {
  name: 'IssueDetail',
  props: ['issues'],
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
    changeDate(date) {
      // console.log('change date: ', date); 이벤트버스 작동하는지 확인용 콘솔
      this.$store.commit('fixDate', {
        id: this.currentIssue.id, //변경할 issue의 id
        dueDate: date, //해당 아이디의 dueDate값을 date로 변경
      });
    },
    changeDescr(text) {
      // this.$store.commit('fixDescr', {
      //   id: this.currentIssue.id,
      //   description: text,
      // });
      let clone = _.cloneDeep(this.currentIssue);
      clone.description = text;
      this.$store.commit('editIssue', clone);
    },
  },
  computed: { ...mapState(['isDetailShow', 'currentIssue']) },
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
