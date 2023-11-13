<script>
export default {
  name: "OptionComponent4",
  // 상태값의 변화를 감지해서 특정 조건에 해당하는지 확인
  watch: {
    inputTxt: function () {
      const pos = this.inputTxt.indexOf(this.forbiddenTxt);

      if (pos >= 0) {
        alert(this.forbiddenTxt + " 입력 불가");
        this.inputTxt = this.inputTxt.substring(0, pos);
      }
    },
  },
  data() {
    return {
      forbiddenTxt: "바보",
      inputTxt: "",
    };
  },
};
</script>
<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 : {{ forbiddenTxt }}</p>
    <textarea v-model="inputTxt" cols="30" rows="10"></textarea>
  </div>
</template>
<style scoped></style>
