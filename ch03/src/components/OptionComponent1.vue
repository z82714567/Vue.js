<script>
export default {
  name: "OptionComponent1",

  // 컴포넌트에서 사용할 데이터(상태값) 선언 속성
  data() {
    return {
      name: "홍길동",
      age: 21,
      addr: "부산",
    };
  },
};
</script>
<template>
  <h4>data 옵션</h4>
  <p>
    이름 : {{ name }}<br />
    나이 : {{ age }}<br />
    주소 : {{ addr }}<br />
  </p>
</template>
<style scoped></style>
