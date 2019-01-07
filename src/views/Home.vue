<script>
import RankingList from '@/components/ranking/RankingList.vue'
export default {
  name: 'HomeView',
  components: {
    RankingList
  }
}
</script>
<template>
  <section class="homeContainer" role="main">
    <div class="homeContainer_content">
      <div class="homeContainer_content_logo">
        <img alt="logo" src="../assets/matchbox-logo-1.png">
      </div>
      <div class="homeContainer_content_title">
        <h2>Ranking</h2>
      </div>
      <RankingList />
    </div>
  </section>
</template>
<style lang="scss">
@import '../assets/css/_utilities/_imports';

.homeContainer {
  background-color: $color-background;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  display: flex;
  
  &_content {
    display: flex;
    flex-direction: column;
    min-width: pxToRem(340);

    &_logo {

      margin-bottom: pxToRem(18);

      img {
        height: pxToRem(24);
        width: pxToRem(126);
      }
    }

    &_title{
      background-color: $color-white;
      border-radius: pxToRem(2);
      color: $color-dark;
      margin-bottom: pxToRem(16);
      padding-bottom: pxToRem(10);
      padding-top: pxToRem(10);
      text-align: center;
    }
  }
}
</style>
