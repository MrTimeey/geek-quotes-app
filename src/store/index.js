import Vue from 'vue'
import Vuex from 'vuex'
import * as axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        quote: "",
        author: ""
    },
    mutations: {
        setData(state, data) {
            state.quote = data.quote? data.quote : "";
            state.author = data.author? data.author : "";
        }
    },
    actions: {
        async loadQuote({commit}) {
            commit('setData', {});
            let response = await axios.get("https://geek-quote-api.herokuapp.com/v1/quote");
            commit('setData', response.data);
        },
    },
    getters: {
      quoteLoaded: state => { return state.quote && state.author }
    },
    modules: {}
})
