<template>
 <header class="header l-header">
   <div class="l-header-logo">[logo]</div>
   <div class="l-header-title">テニスコート空き照会アプリ(α版)</div>
 </header>
</template>

<script>
export default {
  name: 'RogerHeader'
}
</script>

<style scoped>
 .header {
   background-color: #ababab;
   height: 80px;
   line-height: 80px;
   width: 100%;
   overflow: hidden;
 }
 .l-header-logo {
   width: 30%;
   float: left;
   cursor: pointer;
 }
 .l-header-title{
   width: 70%;
   float: left;
 }
 .l-header {
   /*
   position: fixed;
   top: 0;
   */
 }
</style>
