<template lang="pug">
#Menu
  span 目錄
  a(@click="menuRoute('/menu')") menu
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
<style lang="scss" scoped>
#Menu {
  span {
    color: $primary-color;
  }
}
</style>
