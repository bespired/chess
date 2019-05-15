import { setup } from '@/classes/Constants.js';
import { FENboard, FENcastling, FENenPassant, FENtoTurn } from '@/classes/FENconvert.js';

export const boardModule = {

	namespaced: true,

	state: {
		boardSquares:      FENboard(setup),
		castlePermissions: FENcastling(setup),
		enPassant:         FENenPassant(setup),
		currentTurn:       FENtoTurn(setup),
		fenInput:          setup,
	},

	getters: {
		squares:  state => state.boardSquares,
		fenInput: state => state.fenInput
	},

	mutations: {
		fenInput(state, value) {
			state.fenInput = value;
			state.boardSquares= FENboard(state.fenInput);
		},
		setBoard(state) {
			state.boardSquares=      FENboard(state.fenInput);
			state.castlePermissions= FENcastling(state.fenInput);
			state.enPassant=         FENenPassant(state.fenInput);
			state.currentTurn=       FENtoTurn(state.fenInput);
		},
	},

	actions: {

	}

}