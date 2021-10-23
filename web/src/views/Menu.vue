<template lang="pug">
#Menu
  span Menu
  a(@click="menuRoute('/home')") home
  a(@click="menuRoute('/sidepage/todolist')") todoList
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Menu",
  setup() {
    const router = useRouter();
    const menuRoute = (path: string) => {
      router.push({
        path: path
      });
    };
    return {
      menuRoute
    }
  }
});
</script>
