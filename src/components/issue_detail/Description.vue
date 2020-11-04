<template>
  <div class="description mt-8">
    <v-row no-gutters align="center" class="desc-header">
      <v-icon class="mr-3">mdi-text-subject</v-icon>
      <h5>Description</h5>
      <v-btn
        class="ml-3"
        v-if="!isEdit"
        @click="isEdit = true"
        width="0"
        color="#eaecef"
        >Edit</v-btn
      >
    </v-row>
    <div class="descr-field">
      <p class="descr-text" v-if="!isEdit">{{ descr }}</p>
      <div class="edit-form mx-10 my-2" v-else>
        <v-textarea v-model="descr" solo></v-textarea>
        <v-btn color="green" dark>Save</v-btn>
        <v-btn icon @click="isEdit = false"><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: ['initDescr'],
  data() {
    return {
      isEdit: false,
      descr: this.initDescr,
    };
  },
  // duedate와는 달리 변경 타이밍 제어가(save버튼을 누르는)가능하므로
  // watch가 아닌 methods로 콜백함수 사용
  methods: {
    save() {
      this.$emit('change-descr', this.descr);
      this.isEdit = false;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.descr-field p {
  margin: 2px 0 0;
  padding: 0 0 0 30px;
}
</style>
