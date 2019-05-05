import Vue from "vue";
import Vuex from "vuex";
import { boardModule } from '@/modules/boardModule.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
  		boardModule
    },
	state: {},
	mutations: {},
	actions: {}
});
