<template>
  <div class="activity mt-8">
    <v-row no-gutters align="center" class="activity-header mb-4">
      <v-icon class="mr-2">mdi-format-list-bulleted</v-icon>
      <h5>Activity</h5>
    </v-row>
    <v-row class="comment-text-filed-wrapper mb-3" no-gutters align="center">
      <v-avatar><v-img :src="profileImg"></v-img></v-avatar>
      <v-text-field
        outlined
        height="40"
        class="comment-text-field ml-3 mb-4"
        placeholder="Write a comments..."
        v-model="newComment"
        @keyup.enter="save"
      >
        <template v-slot:append>
          <v-btn text small color="green" @click="save">Save</v-btn>
        </template>
      </v-text-field>
    </v-row>
    <div class="activity-field">
      <v-row no-gutters v-for="(comment, i) in orderedActivities" :key="i">
        <div>
          <v-avatar><v-img :src="comment.imgSrc"></v-img></v-avatar>
        </div>
        <div class="right-box pl-3">
          <p class="mt-2 font-weight-medium">
            {{ comment.name }}
            <span class="text-caption ml-2 grey--text">{{
              formatDate(comment.createdAt)
            }}</span>
          </p>
          <v-card class="pa-3">
            <p v-if="!(isEdit === i)">
              {{ comment.text }}
            </p>

            <div class="edit-wrapper" v-else>
              <v-textarea
                v-model="editedComment"
                rows="2"
                row-height="15"
                auto-grow
                solo
                flat
              ></v-textarea>
              <v-btn color="green" dark @click="edit(comment.id)">save</v-btn>
              <v-btn icon @click="isEdit = undefined"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </div>
          </v-card>
          <div class="activity-actions mt-2">
            <v-btn icon x-small><v-icon>mdi-refresh</v-icon></v-btn>
            <v-btn text x-small @click="toEdit(comment.text, i)">Edit</v-btn>
            <!-- isEdit를 눌렀을 때 자신의 인덱스(i)를 저장 -->
            <!-- for문으로 반복되어 생성된 구간이라 인덱스를 파악하지 못하면
            isEdit가 모든 댓글에서 같이 발생함 -->
            <v-btn text x-small @click="todelete(comment.id)">Delete</v-btn>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
export default {
  name: 'Activity',
  props: ['activities'],
  data() {
    return {
      profileImg:
        'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
      newComment: '',
      isEdit: undefined,
      editedComment: '',
    };
  },
  methods: {
    formatDate(date) {
      let created = moment(date);
      return created.format('MMMM Do ddd [at] HH:mm a');
    },
    save() {
      this.$emit('add-new-comment', {
        id: this.newCommentId,
        imgSrc: this.profileImg,
        name: 'IU',
        text: this.newComment,
        createdAt: moment().toISOString(),
        //moment를 import시켰으므로 moment()=현재시간
      });
    },
    toEdit(comment, i) {
      this.isEdit = i;
      this.editedComment = comment;
    },
    edit(id) {
      this.$emit('edit-comment', { text: this.editedComment, id: id });
      this.isEdit = undefined;
      // edit이 완료되면 창이 닫히도록 undefined로 상태변경
    },
    todelete(i) {
      this.$emit('delete-comment', i);
    },
  },
  computed: {
    newCommentId() {
      return (
        this.activities.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
    orderedActivities() {
      let clone = _.cloneDeep(this.activities);
      return clone.sort((a, b) => {
        moment(b.createdAt).unix() - moment(a.createdAt).unix();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-text-field {
  height: 40px;
}
</style>
