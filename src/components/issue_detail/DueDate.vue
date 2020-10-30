<template>
  <div class="due-date-section">
    <h5>DUE DATE</h5>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn min-width="290px" color="#eee" v-bind="attrs" v-on="on">{{
          date
        }}</v-btn>
      </template>
      <v-date-picker
        v-model="date"
        @input="menu = false"
        class="mt-1"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DueDate',
  props: ['initDate'],
  data() {
    return {
      menu: false,
      date: this.initDate,
    };
  },
  // 대부분의 경우 computed가 적합하지만 뭔가 값이 변경되는것을 관측하고
  // 변경 타이밍(save버튼을 누른다던가..)을 따로 지정하기 어려울 때 watch를 쓴다. 공식문서 참조
  watch: {
    date(newValue) {
      this.$emit('change-date', newValue);
      // this.$emit('이벤트를 듣는 부모쪽에서 정한 이벤트 이름', 자식쪽에서 전달해줄 데이터)
    },
  },
};
</script>

<style lang="scss" scoped>
.due-date-section {
  padding: 0 35px;
}
</style>
