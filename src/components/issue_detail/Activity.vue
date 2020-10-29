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
      ></v-text-field>
    </v-row>
    <div class="activity-field">
      <v-row no-gutters v-for="(comment, i) in activities" :key="i">
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
          <v-card class="pa-3">{{ comment.text }}</v-card>
          <div class="activity-actions mt-2">
            <v-btn icon x-small><v-icon>mdi-refresh</v-icon></v-btn>
            <v-btn text x-small>Edit</v-btn>
            <v-btn text x-small>Delete</v-btn>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Activity',
  props: ['activities'],
  data() {
    return {
      profileImg:
        'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1',
    };
  },
  methods: {
    formatDate(date) {
      let created = moment(date);
      return created.format('MMMM Do ddd');
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-text-field {
  height: 40px;
}
</style>
