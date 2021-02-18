<template><div>
<div>
  <ul type="circle">
    <li v-for="results in getSearchResults" :key="results.id" class="results"> {{ results.login }}</li>
  </ul>
</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "SearchResults",
  computed:mapGetters(['getSearchResults']),
}
</script>

<style scoped>
.results{
  display: flex;
  font-family: Arial;
  color: #0022ff;
  top: 10%;
}
</style>