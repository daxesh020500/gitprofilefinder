<template>
<h2>
  Welcome to  {{ getUserDetails.login }} 's profile
  <br>
  <div class="card">
    <img v-if="getUserDetails.avatar_url" :src="getUserDetails.avatar_url" :alt="'GitHub Avatar for '+ getUserDetails.login">
    <h5>Joined Github On  {{getUserDetails.created_at}}</h5>
    <h5>{{getUserDetails.login}}</h5>
    <h5 v-if="getUserDetails.url" >
      <a :href="getUserDetails.html_url">Go to Github Profile
        <i class="fab fa-github-square"></i>
      </a>
    </h5>
    <h5>
      <a :href= "getUserDetails.html_url"> Go to Repos</a>
    </h5>
    <h5 v-if="getUserDetails.location">Origin : {{getUserDetails.location}}</h5>
    <i v-if="getUserDetails.email">Email => {{ getUserDetails.email }}</i>
    <h5>No of Followers : {{ getUserDetails.followers}}</h5>
    <h5>No of Followings : {{getUserDetails.following}}</h5>
  </div>
</h2>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: "UserDetails",
  computed: mapGetters(["getUserDetails"]),
  methods:{
  },
  created() {
    console.log(this.$route.params.username);
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

.title {
  color: grey;
  font-size: 18px;
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

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

h4{
  cursor: pointer;
}

/* selected link */
a:active {
  color: blue;
}
</style>