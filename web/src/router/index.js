import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ 
    path: "/",
    component: Home
   }]
});
