import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/sub1/Hello.vue";
import Welcome from "../components/sub1/Welcome.vue";
import Greeting from "../components/sub1/Greeting.vue";
import Parent from "../components/sub2/Parent.vue";
import Child1 from "../components/sub2/Child1.vue";
import Child2 from "../components/sub2/Child2.vue";
import Header from "../components/sub3/Header.vue";
import Footer from "../components/sub3/Footer.vue";
import Main1 from "../components/sub3/Main1.vue";
import Main2 from "../components/sub3/Main2.vue";
import Main3 from "../components/sub3/Main3.vue";
import Form1 from "../components/sub4/Form1.vue";
import Form2 from "../components/sub4/Form2.vue";
import FormResult1 from "../components/sub4/FormResult1.vue";
import FormResult2 from "../components/sub4/FormResult2.vue";
//router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/hello", name: "Hello", component: Hello },
    { path: "/welcome", name: "Welcome", component: Welcome },
    { path: "/greeting", name: "Greeting", component: Greeting },
    {
      path: "/parent",
      name: "Parent",
      component: Parent,
      children: [
        { path: "child1", component: Child1 },
        { path: "child2", component: Child2 },
      ],
    },
    {
      path: "/main1",
      components: { default: Main1, header: Header, footer: Footer },
    },
    {
      path: "/main2",
      components: { default: Main2, header: Header, footer: Footer },
    },
    {
      path: "/main3",
      components: { default: Main3, header: Header, footer: Footer },
    },
    { path: "/form1", name: "Form1", component: Form1 },
    { path: "/form2", name: "Form2", component: Form2 },
    { path: "/formResult1", name: "FormResult1", component: FormResult1 },
    {
      path: "/formResult2/:name/:age/:addr",
      name: "FormResult2",
      component: FormResult2,
    },
  ],
});

//router 인스턴스 내보내기 -> main.js에서 등록
export default router;
