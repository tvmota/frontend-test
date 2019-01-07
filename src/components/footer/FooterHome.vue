<script>
export default {
  name: 'FooterHome'
}
</script>
<template>
  <footer class="footer" role="contentinfo">
    <div class="footer_content">
      front-end test / <a class="footer_content--link" href="#">matchboxbrasil.com</a>
    </div>
  </footer>
</template>
<style lang="scss">
@import '../../assets/css/_utilities/_imports';

.footer {
  background-color: $color-background;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-shrink: 0;
  color: $color-white;
  min-height: pxToRem(40);
  left: 0;
  max-width: 100vw;
  padding: 0 pxToRem(36);
  position: static;
  right: 0;
  top: 0;
  width: 100%;

  &_content {
    font-size: pxToRem(12);
    font-weight: 200;

    &--link{
      color: $color-white;
      cursor: pointer;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
