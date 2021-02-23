<template>
  <div>
<h2>
  Welcome to  {{ getUserDetails.login }} 's profile
</h2>
  <br>
  <div class="card">
    <img class="profile-pic" v-if="getUserDetails.avatar_url" :src="getUserDetails.avatar_url" :alt="'GitHub Avatar for '+ getUserDetails.login">
    <h4>Joined Github On  {{getUserDetails.created_at}}</h4>
    <h4>{{getUserDetails.login}}</h4>
    <h4 v-if="getUserDetails.url" >
      <a :href="getUserDetails.html_url">Go to Github Profile
        <i class="fab fa-github-square"></i>
      </a>
    </h4>
    <h4>
      <a :href= "getUserDetails.html_url"> Go to Repos</a>
    </h4>
    <h4 v-if="getUserDetails.location">Origin : {{getUserDetails.location}}</h4>
    <i v-if="getUserDetails.email">Email => {{ getUserDetails.email }}</i>
    <h4>No of Followers : {{ getUserDetails.followers}}</h4>
    <h4>No of Followings : {{getUserDetails.following}}</h4>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
  name: "UserDetails",
  computed: mapGetters(["getUserDetails"]),
  methods:{
    ...mapActions(["setUserDetails"]),
  },
  created() {
    console.log(this.$route.params.username);
    if(this.getUserDetails.login !== this.$route.params.username)
      this.setUserDetails(this.$route.params.username);
  }
}
</script>
<style scoped>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: auto;
  text-align: center;
}
button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
a:link {
  color: red;
}
a:visited {
  color: green;
}
a:hover {
  color: hotpink;
}
h4{
  cursor: pointer;
}
a:active {
  color: blue;
}
.profile-pic{
  border-radius:50%;
  image-resolution: from-image;
  border: 1px solid green;
}
</style>