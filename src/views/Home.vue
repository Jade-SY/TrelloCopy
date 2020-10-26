<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <core-view></core-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreView: () => import('@/components/core/View.vue'),
  },
};
</script>
