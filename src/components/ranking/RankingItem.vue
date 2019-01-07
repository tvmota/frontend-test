<script type="text/javascript">
export default {
  name: 'RankingItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    itemNumber: {
      type: Number,
      required: true
    }
  }
}
</script>
<template>
  <div class="rankingItem">
    <div class="rankingItem_avatar">
      <span class="rankingItem_avatar_badge" :data-badge="itemNumber + 1"></span>
      <img class="rankingItem_avatar_img" :src="item.picture" :alt="item.name">
    </div>
    <div class="rankingItem_info">
      <h4>{{item.name.split(' ').slice(0, 2).join(' ')}}</h4>
      <span class="rankingItem_info--description">{{item.description}}</span>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../assets/css/_utilities/_variables';
@import '../../assets/css/_utilities/_functions';

.rankingItem {
  cursor: pointer;
  display: flex;
  padding: pxToRem(10);

  &_avatar {
    display: flex;
    justify-content: center;
    width: 26%;

    &_img{
      border-radius: pxToRem(40);
      border: pxToRem(4) solid $avatar-border;
      height: pxToRem(60);
      width: pxToRem(60);
    }

    &_badge{
      position: relative;

      &:after{
       content: attr(data-badge);
       position: absolute;
       top: pxToRem(38);
       left: pxToRem(44);
       font-size: pxToRem(12);
       font-weight: bold;
       background-color: $color-white;
       color: $color-dark;
       width:pxToRem(18);
       height:pxToRem(18);
       text-align:center;
       line-height: pxToRem(18);
       border-radius:50%;
       border: pxToRem(2) solid $color-dark;
      }
    }
  }

  &_info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    line-height: pxToRem(20);
    padding-left: pxToRem(12);
    width: 74%;

    h4 {
      color: $color-dark;
    }

    &--description{
      color: $item-description;
      font-size: pxToRem(11);
      font-weight: 400
    }
  }

  &:hover{
    background-color: $item-hover-background;

    .rankingItem_avatar_img {
      border: pxToRem(4) solid $color-white;
    }

    .rankingItem_info{
      h4 {
        color: $color-white;
      }
    }

    .rankingItem_info--description{
      color: $color-dark;
    }
  }
}
</style>
