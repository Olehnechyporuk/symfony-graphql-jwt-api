import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = 'http://test-api';


export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {

  },
  actions: {
    LOGIN({commit}, payload) {
            return new Promise(async function(resolve, reject) {
                await axios.post('/api/login_check', payload)
                    .then(function({data, status}) {
                        if (status === 200) {
                            console.log(data);
                            resolve(true);
                        }
                    })
                .catch((error) => {
                    reject(error);
                });
            });
    },

    ADMIN({commit}, payload) {
        return new Promise(async function(resolve, reject) {
            await axios.get('/admin', payload)
                .then(function({data, status}) {
                    console.log(data, status);
                });
        });
    },
  },
});
