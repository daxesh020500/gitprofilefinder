import axios from "axios";

const state = {
    searchItem:"",
    searchResults:[],
    userDetails:{},
    totalCount:0
};
const getters = {
    getSearchResults: (state) => state.searchResults,
    getSearchItem: (state) => state.searchItem,
    getUserDetails: (state) => state.userDetails,
    getTotalCount: (state) => state.totalCount
};
const actions = {
    async fetchSearchResults ({commit} ,params){
        //console.log("Inside Action " + params[0] + "   " + params[1] + "  "  +  params[2])
        const response =
            await axios.get(`https://api.github.com/search/users?q=${params[0]}&per_page=${params[1]}&page=${params[2]}`);
        //console.log("No of Users found " + response.data.total_count)
        if(response.data.total_count !== 0) {
            //console.log(response.data.total_count)
            commit("setSearchResults", response.data.items);
            commit("setTotalCount",response.data.total_count);
        }
    },
    async appendSearchResult({commit} ,params){
        //console.log("Inside Append : " + params[0] + "   " + params[1] + "  " + params[2] )
        const response =
            await axios.
            get(`https://api.github.com/search/users?q=${params[0]}&per_page=${params[1]}&page=${params[2]}`)
        commit("AppendResults",response.data.items);
    },
    setSearchItem( {commit} ,searchItem){
        if(searchItem !== "")
            commit("setSearchItem",searchItem);
    },
    async setUserDetails( {commit} ,username){
        const response =
            await axios.get("https://api.github.com/users/"+username);
        //console.log("Name : " + username);
        //console.log(response.data);
        commit("setUserDetails",response.data);
    }
};
const mutations = {
    setSearchResults:(state,searchResults) => (state.searchResults = searchResults),
    setSearchItem:(state,searchItem) => (state.searchItem = searchItem),
    setUserDetails:(state,userdetails) =>(state.userDetails = userdetails),
    setTotalCount:(state,totalCount) => (state.totalCount = totalCount),
    AppendResults:(state,data) => (state.searchResults = state.searchResults.concat(data))
};
export default {
    state,
    getters,
    actions,
    mutations
};