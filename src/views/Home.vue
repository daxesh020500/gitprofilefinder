<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/gitlogo.png">
    <div class="wrap">
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Search a user " @input="Search" v-model="query" >
        <button type="submit" title="Click Me for All results" class="searchButton" @click="Search(9,100,1)">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <br><br>
    </div>
    <div class="result">
      <ul>

        <li
            v-for="results in getSearchResults.slice(0,5)"
            :key="results.id"
            class="search-item"
            @click="profilePage(results)">
          <img :src="results.avatar_url" style="height:60px;width:130px;">
          <pre>    {{ results.login }}</pre>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import axios from 'axios'
// import SearchResults from "@/components/SearchResults";
import { mapGetters,mapActions } from 'vuex';
import router from "@/router";

export default {
  name: 'Home',
  data(){
    return{
      query:""
    }
  },
  components: {

  },
  computed: mapGetters(['getSearchItem','getSearchResults']),
  methods:{
    ...mapActions(["fetchSearchResults","setSearchItem","setUserDetails"]),
    async Search(e,perPage = 5,pageNumber = 1){
      console.log(perPage + " Hello " + pageNumber)
      this.setSearchItem(this.query);
      //console.log(this.$store.getters.getSearchItem);
      if(this.query !== "")
      await this.fetchSearchResults([this.query,perPage,pageNumber]);
      if(perPage!==5){
        await router.push({name:"AllSearchResult"})
      }
    },
    profilePage(results){
      this.$router.push({name:"UserDetails",params:{username: results.login}});
      this.setUserDetails(results);
    }
  }
}
</script>

<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.search {
  width: 100%;
  position: absolute;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
}
.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
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
.result{
  margin-top: 50px;
  align-items: center;
  align-content: center;
}
</style>
