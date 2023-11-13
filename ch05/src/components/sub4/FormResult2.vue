<template>
  <h4>FormResult2</h4>
  <p>
    name: {{ user.name }}<br />
    age: {{ user.age }}<br />
    addr: {{ user.addr }}<br />
  </p>
</template>
<script setup>
import { useRoute } from "vue-router";

//router 인스턴스 가져오기
const router = useRoute();

//router query 데이터 수신
const user = router.params;
</script>
<style scoped></style>
