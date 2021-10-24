<template lang="pug">
a-layout.h-screen
  a-layout-header.text-left.bg-blue-500.flex.items-center
    h6.text-white.text-xl 五倍加碼券抽籤 - 中籤快速查詢
  a-layout-content
    router-view.h-full
  a-layout-footer
    .notice
    .
</template>
<script>
export default ({
  name: "App",
  setup() {}
});
</script>

<style>
#app {
  font-family: "Noto Sans TC", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
