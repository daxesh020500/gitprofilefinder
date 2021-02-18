<template>
<h2>
  Welcome {{ getUserDetails.login }}
</h2>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: "UserDetails",
  computed: mapGetters(["getUserDetails"])
}
</script>
<style scoped>

</style>