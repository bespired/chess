import { setup } from '@/classes/Constants.js';

export const boardModule = {

	namespaced: true,

	state: {
		boardSquares:  setup,   // current setup of pieces on board.
	},

	getters: {
		squares: state => state.boardSquares
	},

}