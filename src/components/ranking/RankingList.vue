<script type="text/javascript">
import RankingItem from './RankingItem'

export default {
  name: 'RankingList',
  components: {
    RankingItem
  },
  computed: {
    rankingListSource () {
      return this.$store.getters.getRanking
    }
  }
}
</script>
<template>
  <div>
    <h1>Rankinglist</h1>
    <ul>
      <li v-for="rankingItem in rankingListSource" :key="rankingItem.__id">
        <RankingItem :item="rankingItem"/>
      </li>
    </ul>
  </div>
</template>
