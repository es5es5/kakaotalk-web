<template>
  <div id="header" :class="[scrolling ? 'scrolling' : '', _propTheme !== '' ? _propTheme : theme]">
    <div class="header_wrap">
      <img src="@/assets/images/back.svg" alt="svg" class="back">
      <span class="title">{{ 'Louis' }}</span>
      <img src="@/assets/images/search.svg" alt="svg" class="back">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
#header {
  height: 48px;
}

.header_wrap {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;
}

.title {
  font-weight: bold;
  font-size: 18px;
}

.heading {
  display: inline-block;
  font-weight: bold;
  align-self: center;

  &:hover { cursor: pointer; }
}

</style>
