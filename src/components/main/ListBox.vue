<template>
  <div class="list-box">
    <v-list-item-title class="list-box-title ma-2">
      Headline
      <v-btn icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
    </v-list-item-title>
    <list-box-item></list-box-item>
  </div>
</template>

<script>
export default {
  name: 'ListBox',
  components: {
    ListBoxItem: () => import('@/components/listbox/ListBoxItem.vue'),
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  padding: 10px;
  background: #ebecf0;
}
.list-box-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
