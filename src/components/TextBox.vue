<template>
  <div id="TextBox">
    <img src="@/assets/images/media.svg" alt="media" class="media">
    <input type="text" class="inputText">
    <img src="@/assets/images/homeBar.svg" alt="homeBar" class="homeBar">
  </div>
</template>

<script>
export default {
  name: 'TextBox'
}
</script>

<style lang="scss" scoped>
#TextBox {
  position: absolute;
  bottom: 0;
  height: 78px;
  padding: 4px 12px;
  width: 100%;
  background-color: #fff;
}

.media {
  display: inline-block;
  padding: 4px;
  margin-right: 8px;
  vertical-align: middle;
}

.inputText {
  width: calc(100% - 40px);
  display: inline-block;
  vertical-align: middle;
  height: 36px;
  line-height: 36px;
  padding: 3px 12px;
  border-radius: 18px;
  outline: none;
  background-color: #F8F8F8;
  border: 1px solid #DEDEDE;
  font-size: 1em;
}

.homeBar {
  position: absolute;
  bottom: 8px;
  left: calc(50% - 74px);
}
</style>
