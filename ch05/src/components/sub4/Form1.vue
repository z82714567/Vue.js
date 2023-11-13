<template>
  <h4>Form1</h4>
  <form @submit.prevent="submitHandler">
    <input type="text" v-model="user.name" /><br />
    <input type="text" v-model="user.age" /><br />
    <select v-model="user.addr">
      <option>서울</option>
      <option>대전</option>
      <option>대구</option>
      <option>부산</option>
      <option>광주</option>
    </select>
    <br />
    <input type="submit" value="전송" />
  </form>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const user = reactive({
  name: "",
  age: 0,
  addr: "",
});

const submitHandler = () => {
  //router인스턴스로 컴포넌트 라우팅(데이터 포함) 쿼리방식: /formResult1/name=name/age=age/addr=addr
  router.push({ name: "FormResult1", query: user });
};
</script>
<style scoped></style>
