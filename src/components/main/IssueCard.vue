<template>
  <div>
    <v-card class="issue-card mb-3" elevation="1" @click="openDatail">
      <h4>{{ title }}</h4>
      <div class="icon-wrapper"></div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IssueCard',
  props: ['title'],
  methods: {
    openDatail() {
      this.$store.commit('toggleIsDetailShow');
    },
  },
  computed: { ...mapState(['issues']) },
};
</script>

<style lang="scss" scoped>
.issue-card {
  padding: 10px;
}
</style>
