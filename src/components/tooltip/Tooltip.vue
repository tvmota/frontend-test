<script type="text/javascript">
export default {
  name: 'TooltipComponent',
  props: {
    positive: {
      type: Number,
      required: true
    },
    negative: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<template>
  <div class="tooltip" :class="{'show': status}">
    <div class="tooltip_info_divider">
      <div class="tooltip_info_label --positive">
        Gostam
      </div>
      <div class="tooltip_info_percentual">
        {{positive}}%
      </div>
    </div>
    <div class="tooltip_info">
      <div class="tooltip_info_label --negative">
        Não Gostam
      </div>
      <div class="tooltip_info_percentual">
        {{negative}}%
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '../../assets/css/_utilities/_variables';
@import '../../assets/css/_utilities/_functions';

.tooltip {
  visibility: hidden;
  display: flex;
  background-color: $color-white;
  color: $color-dark;
  text-align: center;
  border-radius: pxToRem(6);
  position: absolute;
  top: pxToRem(24);
  right: pxToRem(-188);

  &_info{
    &_divider{
      border-right: pxToRem(1) solid $tooltip-divider;
    }

    &_label{
      padding: pxToRem(6) pxToRem(12) pxToRem(6) pxToRem(12);
      font-size: pxToRem(12);
      background-color: $tooltip-label;
      color: $color-white;
      font-weight: 600;
      line-height: pxToRem(4);

      &.--positive {
        border-top-left-radius: pxToRem(6);
      }

      &.--negative {
        border-top-right-radius: pxToRem(6);
      }
    }

    &_percentual {
      font-size: pxToRem(18);
      font-weight: 900;
      line-height: pxToRem(28);
      color: $tooltip-percentual;
    }
  }

  &:before{
    content:'';
    display:block;
    width: 0;
    height: 0;
    position: absolute;
    border-top: pxToRem(6) solid transparent;
    border-bottom: pxToRem(6) solid transparent;
    border-right: pxToRem(6) solid $color-white;
    left: pxToRem(-6);
    top: pxToRem(15);
  }
}

.show{
  visibility: visible;
}
</style>
