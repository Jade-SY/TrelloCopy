<template>
  <div class="check-list mt-8">
    <v-row no-gutters align="center" class="check-list-header">
      <v-icon class="mr-2">mdi-checkbox-marked-outline</v-icon>
      <h5>Checklist</h5>
      <v-spacer></v-spacer>
      <v-btn class="ml-2" color="#eaecef">Delete</v-btn>
    </v-row>
    <div class="check-list-field">
      <v-row no-gutters align="center" class="mt-3">
        <span style="margin-right:10px; font-size:12px;">{{ progress }}%</span>
        <v-col>
          <v-progress-linear
            color="grey"
            rounded
            :value="progress"
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
      <div class="checkbox-list-wrapper">
        <v-checkbox
          v-for="(task, i) in tasks"
          :key="i"
          height="10"
          v-model="task.complete"
          :label="task.title"
          class="check-list-item mt-2 mb-0 pa-0"
        ></v-checkbox>
      </div>
      <div class="buttons-wrapper ml-8">
        <v-btn v-if="!isEdit" small color="#eaecef" @click="isEdit = true"
          >Add an item</v-btn
        >
        <div v-else>
          <v-textarea
            v-model="newItem"
            solo
            outlined
            flat
            placeholder="Add an item"
          ></v-textarea>
          <v-btn color="green" dark @click="save">Add</v-btn>
          <v-btn icon @click="isEdit = false"><v-icon>mdi-close</v-icon></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  props: ['tasks'], //initTasks,
  data() {
    return {
      isEdit: false,
      newItem: '',
      // textarea에 입력된 내용을 받을 프로퍼티 생성. textarea에는 v-model로 연결한다
    };
  },
  methods: {
    save() {
      this.$emit('add-check-item', {
        id: this.newCheckItemId,
        title: this.newItem,
        complete: false,
      });
      this.newItem = '';
    },
  },
  computed: {
    progress() {
      let completeNum = this.tasks.filter((el) => el.complete).length;
      return ((completeNum / this.tasks.length) * 100).toFixed(1);
    },
    newCheckItemId() {
      return (
        this.tasks.reduce((acc, cur) => {
          acc = Math.max(acc, cur.id);
          return acc;
        }, 0) + 1
        // 초기값 0에서 부터 acc값을 늘려가면서 최대값을 구함
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
