<template lang="pug">
a-layout.h-screen
  a-layout-header.text-left.bg-blue-500.flex.items-center
    h6.text-white.text-xl 五倍加碼券抽籤 - 中籤快速查詢
  a-layout-content
    router-view.h-full
  a-layout-footer.p-0
    .notice.flex.justify-center.bg-red-400.items-center.text-white.py-1
      span.text-white 注意事項：此站僅供使用者方便查看中籤號碼，非官方網站，中籤號碼暫時為手動更新，若有資料錯誤或未更新狀況，請以
        a(target='_blank' href='https://vhpi.5000.gov.tw/')
          | 五倍加碼券官網
        | 為主。
    .create.flex.justify-center.bg-black.items-center.text-white.py-1
      strong 2021 — JaoJaoLin 傑姆士
</template>
<script>
export default ({
  name: "App",
  setup() {}
});
</script>

<style>
#app {  font-family: "Noto Sans TC", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
