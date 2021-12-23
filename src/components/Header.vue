<template>
  <div id="header">
    <div class="header_wrap">
      <div>
        <img src="@/assets/images/back.svg" alt="svg" class="icon back">
      </div>
      <div>
        <span class="title">{{ 'Louis' }}</span>
      </div>
      <div>
        <img src="@/assets/images/search.svg" alt="svg" class="icon search">
        <img src="@/assets/images/menu.svg" alt="svg" class="icon menu">
      </div>
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
  line-height: 48px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 auto;

  div {
    width: 60px;
  }
}

.title {
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}

.icon {
  height: 18px;
  vertical-align: middle;

  width: 20px;
  &.menu {
    margin-left: 20px;
  }
}

.heading {
  display: inline-block;
  font-weight: bold;
  align-self: center;

  &:hover { cursor: pointer; }
}

</style>
