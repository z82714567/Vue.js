<script setup>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/auth.js";
import { onBeforeMount, reactive } from "vue";
import axios from "axios";

// 라우터 가져오기
const router = useRouter();

// 전역 스토어 가져오기
const authStore = useAuthStore();
const user = authStore.getUser;

// 상태값 선언
const users = reactive({ data: {} });

// 이벤트 핸들러
const btnLogout = () => {
  authStore.logout();
  router.push("/jwt/login");
};

const btnGetUsers = async () => {
  const accessToken = authStore.getAccessToken;

  try {
    const response = await axios.get("http://localhost:8080/users", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log(JSON.stringify(response));

    users.data = response.data;
  } catch (err) {
    console.log("err : " + JSON.stringify(err));
    // refresh 토큰을 전송해서 access 토큰 갱신
    sendRefreshToken();
  }
};

const sendRefreshToken = async () => {
  const refreshToken = authStore.getRefreshToken;

  try {
    const response = await axios.get("http://localhost:8080/refreshToken", {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });

    // Access 토큰 갱신
    authStore.setAccessToken(response.data);

    console.log(JSON.stringify(response));
  } catch (err) {
    // 최종적으로 Refresh 토큰에서 에러가 발생하면 로그인 시킴
    console.log("sendRefreshToken err : " + JSON.stringify(err));
    //authStore.logout();
    //router.push("/jwt/login");
  }
};

// 컴포넌트 생명주기 훅
onBeforeMount(() => {
  const user = authStore.getUser;

  // 로그인 상태 이면
  if (!user) {
    router.push("/jwt/login");
  }
});
</script>

<template>
  <h4>LoginSuccess</h4>

  <p>{{ user.name }}님 반갑습니다.</p>

  <button @click="btnLogout">로그아웃</button>
  <button @click="btnGetUsers">데이터 요청</button>

  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>나이</td>
      <td>가입일</td>
    </tr>
    <tr v-for="user in users.data">
      <td>{{ user.uid }}</td>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.regDate }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
