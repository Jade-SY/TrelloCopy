<template>
  <div class="main-view">
    <list-box></list-box>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
    <div class="list-box"></div>
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
  height: calc(100vh - 60px);
  display: flex;
  flex-flow: row;
  overflow-x: auto;
}
.list-box {
  flex: 400px 0 0;
  height: 600px;
  border: 1px solid red;
}
</style>
