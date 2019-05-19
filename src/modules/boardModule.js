import { setup } from '@/classes/Constants.js';

export const boardModule = {

	namespaced: true,

	state: {
		chess:     new window.Chess(setup),
		fenInput:  setup,
	},

	getters: {
		squares:  state => state.chess,
		fenInput: state => state.fenInput
	},

	mutations: {
		fenInput(state, value) {
			state.fenInput = value;
			state.chess.load(state.fenInput);
		},
		setBoard(state) {
			state.chess.load(state.fenInput);
		},
	},

	actions: {

	}

}