// Composables
import { createRouter, createWebHistory } from "vue-router";
import BasicComponent from "@/components/BasicComponent.vue";
import GridComponent from "@/components/GridComponent.vue";
import LayoutComponent from "@/components/LayoutComponent.vue";

const routes = [
  { path: "/basic", component: BasicComponent },
  { path: "/grid", component: GridComponent },
  { path: "/layout", component: LayoutComponent },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
