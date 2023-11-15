import { createRouter, createWebHistory } from "vue-router";
import AxiosComponent from "../components/AxiosComponent.vue";
import JwtComponent from "../components/JwtComponent.vue";
import Login from "../components/user/Login.vue";
import LoginSuccess from "../components/user/LoginSuccess.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/axios", name: "Axios", component: AxiosComponent },
    {
      path: "/jwt",
      name: "Jwt",
      component: JwtComponent,
      children: [
        { path: "", component: Login },
        { path: "login", component: Login },
        { path: "loginSuccess", component: LoginSuccess },
      ],
    },
  ],
});

// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
