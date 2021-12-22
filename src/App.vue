<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active { transition: opacity .1s }
.fade-enter,
.fade-leave-to { opacity: 0 }

* {
  font-family: Helvetica,AppleSDGothic,"Apple SD Gothic Neo",AppleGothic,Arial,Tahoma;
}

@import '@/../colony-vue/src/assets/scss/reset.scss';
</style>
