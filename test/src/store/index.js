import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        fns: {}
    },
    mutations: {
        ADD_FN(state, { url, cb }) {
            if (state.fns[url]) state.fns[url]()
            state.fns[url] = cb


        },
        RM_FN(state, url) {
            delete state.fns[url]
        },
        RUN_FN(state) {
            Object.values(state.fns).forEach(item => {
                item()
            });
        }
    },
    actions: {
        // addFn()
    }
})
