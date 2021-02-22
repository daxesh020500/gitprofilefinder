<template>
  <div class="wrap">
  <div class="result">
    <ul>
      <li
          v-for="results in getSearchResults"
          :key="results.id"
          class="search-item"
          @click="profilePage(results)">
        <img class="profile-pic" :src="results.avatar_url" alt="Profile Picture">
        <span class="result-text">{{ results.login }} </span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "AllSearchResult",
  computed: mapGetters(['getSearchItem','getSearchResults']),
  methods:{
    ...mapActions(["fetchSearchResults","setSearchItem","setUserDetails"]),
    profilePage(results){
      this.$router.push({name:"UserDetails"});
      this.setUserDetails(results);
    }
  }
}
</script>

<style scoped>
.wrap{
  width: 30%;
  position: absolute;
  left: 35.5%;
  margin-top: 5px;
}
.search-item{
  list-style-type: none;
  display: flex;
  left:38%;
  right: 40%;
  align-items: center;
  text-align: center;
  background-color:beige;
  padding: 3px 5px;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  font-size: 15px;
  color: #00B4CC;
  cursor: pointer;
}
li:hover{
  background-color:#2c3e50 ;
}
.result-text{
  padding: 30px;
}
.profile-pic{
  border-radius:50%;
  image-resolution: from-image;
  border: 1px solid green;
  height: 100px;
}
.result{
  margin-top: 50px;
  align-items: center;
  align-content: center;
}
</style>