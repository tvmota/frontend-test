<script type="text/javascript">
import RankingItem from './RankingItem.vue'
import Tooltip from '../tooltip/Tooltip.vue'

export default {
  name: 'RankingList',
  components: {
    RankingItem,
    Tooltip
  },
  computed: {
    rankingListSource () {
      return this.$store.getters.getRanking
    }
  }
}
</script>
<template>
  <ol class="rankingContainer">
    <li
      class="rankingContainer_item"
      :class="{'rankingContainer_striped': (index%2) > 0}"
      :key="rankingItem.__id"
      @mouseover="rankingItem.tooltipSts = true"
      @mouseout="rankingItem.tooltipSts = false"
      v-for="(rankingItem, index) in rankingListSource">
        <Tooltip :positive="rankingItem.positivePercent" :negative="rankingItem.negativePercent" :status="rankingItem.tooltipSts"/>
        <RankingItem :item="rankingItem" :item-number="index"/>
    </li>
  </ol>
</template>
<style lang="scss">
@import '../../assets/css/_utilities/_variables';
@import '../../assets/css/_utilities/_functions';

.rankingContainer{
  background-color: $color-white;
  border-radius: pxToRem(2);
  height: 100%;
  margin: 0;
  list-style: none;
  padding: 0;

  &_item {
    position: relative;
  }

  &_striped {
    background-color: rgba(204, 204, 204, .6);
  }
}
</style>
