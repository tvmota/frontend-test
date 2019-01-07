<script type="text/javascript">
import { rankingList } from './services/RankingService'
import FooterHome from '@/components/footer/FooterHome.vue'

export default {
  name: 'AppRanking',
  components: {
    FooterHome
  },
  created () {
    let self = this

    rankingList()
      .then(resp => {
        self.$store.dispatch('addRanking', resp.data)
      }).catch(err => console.error(err))
  }
}
</script>
<template>
  <div class="content" id="app">
    <router-view/>
    <FooterHome />
  </div>
</template>

<style lang="scss">
@import './assets/css/_base/_normalize';
@import './assets/css/_base/_base';

.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
