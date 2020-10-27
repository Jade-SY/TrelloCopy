<template>
  <div>
    <v-overlay :value="true">
      <v-card class="issue-detail-card" light>
        <div class="issue-detail-header">
          <h2><v-icon>mdi-inbox-full</v-icon>this is title</h2>
          <p>in list todo</p>
          <v-btn class="close-btn" icon><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <v-row>
          <v-col cols="8" class="left-side">
            <due-date></due-date>
            <Description></Description>
            <check-list></check-list>
            <Activity></Activity>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'IssueDetail',
  components: {
    DueDate: () => import('@/components/issue_detail/DueDate.vue'),
    Description: () => import('@/components/issue_detail/Description.vue'),
    CheckList: () => import('@/components/issue_detail/CheckList.vue'),
    Activity: () => import('@/components/issue_detail/Activity.vue'),
  },
  data: () => ({
    overlay: false,
  }),
};
</script>

<style lang="scss" scoped>
.issue-detail-card {
  width: 60vw;
  min-height: 80vh;
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
  top: 0px;
  right: 10px;
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
