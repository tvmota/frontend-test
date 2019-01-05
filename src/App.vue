<script type="text/javascript">
import { rankingList } from './services/RankingService'

export default {
  name: 'AppRanking',
  created () {
    let self = this

    rankingList()
      .then(resp => self.$store.dispatch('addRanking', resp.data))
      .catch(err => console.error(err))
  }
}
</script>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
