<template>
  <div class="actions">
    <h5>ACTIONS</h5>
    <div class="actions-btn-wrapper">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="isMove = !isMove"
            elevation="0"
            color="#eaecef"
            block
            v-bind="attrs"
            v-on="on"
            class="action-btn pl-3 mb-2"
            ><v-icon size="20" class="mr-2">mdi-arrow-right</v-icon> Move</v-btn
          >
        </template>
        <v-list width="250">
          <v-row justify="center">
            <p>Move</p>
            <v-list-item v-for="(list, i) in lists" :key="i">
              <v-btn @click="move(list)" text width="100%">{{
                list.title
              }}</v-btn>
            </v-list-item>
          </v-row>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            @click="isCopy = !isCopy"
            elevation="0"
            color="#eaecef"
            block
            v-bind="attrs"
            v-on="on"
            class="action-btn pl-3 mb-2"
            ><v-icon size="20" class="mr-2">mdi-content-copy</v-icon>
            Copy</v-btn
          >
        </template>
        <v-list width="250">
          <v-row justify="center">
            <p>Copy</p>
            <v-list-item v-for="(list, i) in lists" :key="i">
              <v-btn @click="copy(list)" text width="100%">{{
                list.title
              }}</v-btn>
            </v-list-item>
          </v-row>
        </v-list>
      </v-menu>

      <v-btn
        @click="isDelete = !isDelete"
        elevation="0"
        color="#eaecef"
        block
        class="action-btn pl-3"
        ><v-icon size="22" class="mr-2">mdi-delete-outline</v-icon> Delete
        <v-spacer></v-spacer
      ></v-btn>
      <v-fade-transition>
        <v-card v-if="isDelete" class="mx-auto" max-width="344">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                Delete Card?
              </v-list-item-title>
              <v-divider></v-divider>
              <p class="grey--text subtitle-2 font-weight-regular">
                All actions will be removed from the activity.
              </p>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn elevation="1" color="red" dark @click="deleteIssue">
              Delete
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="isDelete = false" icon
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-fade-transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Actions',
  props: ['issues'],
  data() {
    return {
      isMove: false,
      isCopy: false,
      isDelete: false,
    };
  },
  methods: {
    move(list) {
      this.$emit('move-issue', list);
    },
    copy(list) {
      this.$emit('copy-issue', list);
    },
    deleteIssue() {
      this.$emit('delete-issue');
    },
  },
  computed: { ...mapState(['lists']) },
};
</script>

<style lang="scss" scoped>
.action-btn {
  justify-content: flex-start;
}
</style>
