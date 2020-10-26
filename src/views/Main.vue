<template>
  <div class="main-view">
    <list-box :title="'to do'"></list-box>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
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
