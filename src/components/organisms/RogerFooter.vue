<template>
  <footer class="footer l-footer">
    <div>&copy; 2019 freitech.</div>
  </footer>
</template>

<script>
export default {
  name: 'RogerFooter'
}
</script>

<style scoped>
  .footer {
    height: 100px;
    line-height: 100px;
    width: 100%;
    background: rgba(124, 252, 0, .4);
    color: #1a3300;
    border-top: 2px solid green;
  }
  .l-footer {
    margin-top: 100px;
/*
    position:fixed;
    bottom: 0;
*/
  }
</style>
