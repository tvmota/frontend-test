<script type="text/javascript">
export default {
  name: 'RankingItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div>
    <p>{{item.name}}</p>
  </div>
</template>
