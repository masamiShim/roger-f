<template>
  <header class="header l-header">
    <div class="l-header-logo"><img class="c-header-logo__image" src="@/assets/tennis-icon.png"/></div>
    <div class="l-header-title">テニスコートいちげんさん（おためしばん）</div>
  </header>
</template>

<script>
export default {
  name: 'RogerHeader'
}
</script>

<style scoped>
  .header {
    background: rgba(124, 252, 0, .4);
    height: 80px;
    line-height: 80px;
    width: 100%;
    overflow: hidden;
    color: #1a3300;
    border-bottom: 2px solid green;
  }

  .l-header-logo {
    width: 30%;
    float: left;
    cursor: pointer;
  }

  .c-header-logo__image {
    padding: 10px;
    width: 80px;
    height: 80px;
    box-sizing: border-box;
  }

  .l-header-title {
    font-family: 'mini-wakuwaku';
    width: 70%;
    text-align: left;
    float: left;
  }

  .l-header {
    /*
    position: fixed;
    top: 0;
    */
  }
</style>
