import { mnemonics, ranks, lookup, emptyBoard } from '@/classes/Constants.js';
import { clone, onBoard } from '@/classes/Constants.js';

export function FENboard(fen){
	let codes = fen.split(" ")[0], file= 9, rank= 1;
	let newBoard = clone(emptyBoard);
    codes.split("/").forEach(function(element) {
        file--; rank = 0;
        element.split("").forEach(function(letter) {
            let number = lookup.indexOf(letter);
            if (number > 9) {
                if (onBoard(rank, file)){
                    newBoard[ranks[rank]][file] = mnemonics[letter];
                }
                rank++;
            } else {
                rank += number;
            }
        });
    });
    return newBoard;
}
export function FENtoTurn(fen){
	return fen.split(" ")[1] === "w" ? "white" : "black";
}
export function FENcastling(fen){
	return fen.split(" ")[2];
}
export function FENenPassant(fen){
	return fen.split(" ")[3];
}
