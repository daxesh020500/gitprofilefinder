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
    async fetchSearchResults ({commit} ,username){
        const response =  await axios.get(`https://api.github.com/search/users?q=${username}`);
        commit("setSearchResults",response.data.items);
    },
    setSearchItem( {commit} ,searchItem){
        commit("setSearchItem",searchItem);
    },
    setUserDetails( {commit} ,userdetails){
        commit("setUserDetails",userdetails);
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