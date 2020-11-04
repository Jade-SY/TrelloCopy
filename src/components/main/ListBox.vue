<template>
  <v-card class="list-box">
    <v-row class="box-header" align="center" no-gutters>
      <h2>{{ list.title }}</h2>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-dots-horizontal</v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item>
            <v-btn @click="deleteList" depressed color="red" dark
              >Delete List</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <div class="item-list-wrapper">
      <issue-card
        v-for="(issue, i) in relatedIssues"
        :key="i"
        :issue="issue"
      ></issue-card>
    </div>
    <div class="btn-wrapper">
      <v-btn
        v-if="!isAddCard"
        text
        color="#5e6c84"
        @click="isAddCard = !isAddCard"
        ><v-icon>mdi-plus</v-icon> Add a card</v-btn
      >
      <v-card v-else class="mx-auto px-3 elevation-0">
        <v-text-field v-model="newCardTitle"></v-text-field>

        <v-card-actions>
          <v-btn elevation="1" color="green" dark @click="addCard">
            Add Card
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="isAddCard = false" icon
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ListBox',
  props: ['list'],
  components: {
    IssueCard: () => import('@/components/main/IssueCard.vue'),
  },
  data() {
    return {
      isAddCard: false,
      newCardTitle: '',
    };
  },
  methods: {
    addCard() {
      let defaultIssueForm = {
        id: this.newId,
        listId: this.list.id,
        //props로 받아온 list에 현재listbox의 id값이 해당됨
        title: this.newCardTitle,
        description: '',
        dueDate: '',
        checklist: [],
        activities: [],
      };
      this.$store.commit('addIssue', defaultIssueForm);
      this.newCardTitle = '';
      this.isAddCard = false;
    },
    deleteList() {
      this.$store.commit('deleteList', this.list.id);
    },
  },
  computed: {
    ...mapState(['issues']),
    relatedIssues() {
      return this.issues.filter((el) => el.listId === this.list.id);
    },
    newId() {
      return (
        this.issues.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  margin: 10px;
  background: #ebecf0;
}
.box-header {
  padding: 5px 20px;
  h2 {
    font-size: 1.3rem;
  }
}
.item-list-wrapper {
  padding: 5px;
}
.btn-wrapper {
  padding: 5px;
}
</style>
