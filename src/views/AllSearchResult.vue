<template>
  <div class="wrap">
    <h4 :v-model="getTotalCount">Total Results Fetched : {{ getTotalCount }}</h4>
    <h5> Press Load More to get More...</h5>
    <h5 :v-model="getSearchResults.length">Size of Array {{getSearchResults.length}}</h5>
  <ul class="result">
      <li
          v-for="results in getSearchResults"
          :v-model="getSearchResults"
          :key="results.login"
          class="search-item"
          @click="profilePage(results.login)">
        <img  class="profile-pic" :src="results.avatar_url" alt="Profile Picture">
        <span class="result-text">{{ results.login }} </span>
      </li>
    </ul>
    <button @click="loadMore" class="button" v-show="isAllResultsFetched">Load More {{isAllResultsFetched}}</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "AllSearchResult",
  computed: {
    ...mapGetters(['getSearchItem','getSearchResults','getTotalCount']),
    isAllResultsFetched() {
      return this.getSearchResults.length < this.$store.getters.getTotalCount
    }
  },
  methods:{
    ...mapActions(["fetchSearchResults","setSearchItem","setUserDetails","appendSearchResult"]),
    async profilePage(username){
      await this.setUserDetails(username);
      this.$router.push({name:"UserDetails",params:{username: username}});
    },
    loadMore(){
      //console.log("Current : " + currentResultLength);
      //console.log("Total Results " + this.$store.getters.getTotalCount);
      if(this.getSearchResults.length < this.$store.getters.getTotalCount){
        //console.log("Condition Satisfied")
        this.appendSearchResult([this.$route.params.searchTerm,100,(this.getSearchResults.length /100 ) + 1])
      }
      else{
        window.alert("All Results Fetched")
      }
    }
  },
  async created() {
    //console.log("Inside Created ")
    //console.log(this.$route.params.searchTerm + " ::: " +this.$route.params.perPage + ":::" + this.$route.params.pageNumber)
    //console.log(this.$store.getters.getSearchResults)
    this.fetchSearchResults([this.$route.params.searchTerm,this.$route.params.perPage,this.$route.params.pageNumber])
  },
}
</script>

<style scoped>
.wrap{
  width: 60vw;
  position: absolute;
  alignment: center;
  margin-left: 20vw;
  margin-right: 20vw;
  box-sizing: border-box;
  border: 2px solid cadetblue;
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
  align-items: center;
  align-content: center;
  max-height: 90vh;
  overflow: scroll;
  padding: 0px;
  margin: 0px;
}
.button{
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  background: dodgerblue;
  text-align: center;
  width: 10vw;
  color: chartreuse;
  border-radius: 25px;
  cursor: pointer;
}
</style>