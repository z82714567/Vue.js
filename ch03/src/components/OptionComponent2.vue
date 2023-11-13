<script>
export default {
  name: "OptionComponent2",

  // 이벤트 또는 로직 처리를 위한 함수 선언 옵션
  methods: {
    btn1Click() {
      alert("button1 click!");
    },
    btn2Click: function () {
      alert("button2 click!");
    },
    btn3Click: () => {
      alert("button3 click!");
    },
  },
};
</script>
<template>
  <h4>methods 옵션</h4>
  <button v-on:click="btn1Click">button1</button>
  <button @:click="btn2Click">button2</button>
  <button @:click="btn3Click">button3</button>
</template>
<style scoped></style>
