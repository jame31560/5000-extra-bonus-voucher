import { createRouter, createWebHistory } from "vue-router";
import { vueRouters } from "./autoRouter";
import Home from "@/views/Home.vue";

let routes = [

  {
    path: "/",
    component: Home
  },
  ...vueRouters()
];

export default createRouter({
  history: createWebHistory(),
  routes
})
