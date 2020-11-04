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
            <check-list
              :tasks="currentIssue.checklist"
              @add-check-item="addCheckListItem"
            ></check-list>
            <Activity
              :activities="currentIssue.activities"
              @add-new-comment="addNewComment"
              @edit-comment="editComment"
              @delete-comment="deleteComment"
            ></Activity>
          </v-col>
          <v-col cols="4">
            <Actions
              @move-issue="moveIssue"
              @copy-issue="copyIssue"
              @delete-issue="deleteIssue"
            ></Actions>
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
      let clone = _.cloneDeep(this.currentIssue); //본 데이터 훼손을 막기 위해 lodash문법을 이용하여 데이터 복제
      clone.description = text; //복제한 데이터를 변경
      this.$store.commit('editIssue', clone); //변경된 데이터를 vuex에 전달
    },
    addCheckListItem(item) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.checklist.push(item);
      this.$store.commit('editIssue', clone);
    },

    addNewComment(comment) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.activities.push(comment);
      this.$store.commit('editIssue', clone);
    },
    editComment(comment) {
      let clone = _.cloneDeep(this.currentIssue);
      let target = clone.activities.find((el) => el.id === comment.id);
      target.text = comment.text;
      this.$store.commit('editIssue', clone);
    },
    deleteComment(id) {
      let clone = _.cloneDeep(this.currentIssue);
      let targetIndex = clone.activities.findIndex((el) => el.id === id);
      clone.activities.splice(targetIndex, 1);
      this.$store.commit('editIssue', clone);
    },
    moveIssue(list) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.listId = list.id;
      this.$store.commit('editIssue', clone);
    },
    copyIssue(list) {
      let clone = _.cloneDeep(this.currentIssue);
      clone.id = this.newIssueId;
      clone.listId = list.id;
      this.$store.commit('addIssue', clone);
    },
    deleteIssue() {
      this.$store.commit('deleteIssue', this.currentIssue.id);
    },
  },
  computed: { ...mapState(['isDetailShow', 'currentIssue', 'issues']) },
  newIssueId() {
    return (
      this.activities.reduce((acc, cur) => {
        acc = Math.max(acc, cur.id);
        return acc;
      }, 0) + 1
    );
  },
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
