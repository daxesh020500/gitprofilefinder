import axios from "axios";

const state = {
    searchItem:"",
    searchResults:[],
    userDetails:{}
};
const getters = {
    getSearchResults: (state) => state.searchResults,
    getSearchItem: (state) => state.searchItem,
    getUserDetails: (state) => state.userDetails
};
const actions = {
    async fetchSearchResults ({commit} ,params){
        console.log("Inside Action " + params[0] + "   " + params[1] + "  "  +  params[2])
        const response =
            await axios.get(`https://api.github.com/search/users?q=${params[0]}&per_page=${params[1]}&page=${params[2]}`);
        //console.log("No of Users found " + response.data.total_count)
        if(response.data.total_count !== 0)
            commit("setSearchResults",response.data.items);
    },
    setSearchItem( {commit} ,searchItem){
        if(searchItem !== "")
            commit("setSearchItem",searchItem);
    },
    async setUserDetails( {commit} ,username){
        const response =
            await axios.get("https://api.github.com/users/"+username);
        console.log("Name : " + username);
        console.log(response.data);
        commit("setUserDetails",response.data);
    }
};
const mutations = {
    setSearchResults:(state,searchResults) => (state.searchResults = searchResults),
    setSearchItem:(state,searchItem) => (state.searchItem = searchItem),
    setUserDetails:(state,userdetails) =>(state.userDetails = userdetails)
};
export default {
    state,
    getters,
    actions,
    mutations
};