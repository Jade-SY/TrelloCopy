<template>
  <div class="main-view">
    <list-box
      v-for="(list, i) in lists"
      :key="i"
      :title="list.title"
      :issues="issues"
    ></list-box>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  computed: { ...mapState(['lists', 'issues']) },
};
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  overflow-x: auto;
}
.list-box {
  flex: 400px 0 0;
}
</style>
