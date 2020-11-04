<template>
  <div class="main-view">
    <list-box v-for="(list, i) in lists" :key="i" :list="list"></list-box>
    <div class="add-list-box">
      <div class="btn-wrapper">
        <v-btn
          v-if="!isAddList"
          elevation="0"
          width="300"
          class="ma-3"
          color="#ebecf0"
          @click="isAddList = !isAddList"
          ><v-icon>mdi-plus</v-icon> Add New List</v-btn
        >
        <v-card
          v-else
          color="#ebecf0"
          width="300"
          class="ma-3 px-2 elevation-0"
        >
          <v-text-field
            @keyup.enter="addList"
            v-model="newListTitle"
          ></v-text-field>

          <v-card-actions>
            <v-btn elevation="1" color="green" dark @click="addList">
              Add List
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="isAddList = false" icon
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Main',
  data() {
    return {
      isAddList: false,
      newListTitle: '',
    };
  },
  components: {
    ListBox: () => import('@/components/main/ListBox.vue'),
  },
  methods: {
    addList() {
      let defaultListForm = {
        id: this.newListId,
        title: this.newListTitle,
      };
      this.$store.commit('addList', defaultListForm);
      this.newListTitle = '';
      this.isAddList = false;
    },
  },
  computed: {
    ...mapState(['lists']),
    newListId() {
      return (
        this.lists.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
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
