export const files = [ 8, 7, 6, 5, 4, 3, 2, 1 ];
export const ranks = ['a','b','c','d','e','f','g','h'];

export const mnemonics= {
	P: 'white-pawn', N: 'white-knight', B: 'white-bishop', R: 'white-rook', Q: 'white-queen', K: 'white-king',
	p: 'black-pawn', n: 'black-knight', b: 'black-bishop', r: 'black-rook', q: 'black-queen', k: 'black-king',
};

export const piece= {
	w: { p: 'white-pawn', n: 'white-knight', b: 'white-bishop', r: 'white-rook', q: 'white-queen', k: 'white-king' },
	b: { p: 'black-pawn', n: 'black-knight', b: 'black-bishop', r: 'black-rook', q: 'black-queen', k: 'black-king' }
};

export const setup= 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
export const positions = {
	setup:   'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
	rooks:   '8/1r4r1/8/8/8/8/1R4R1/8 w KQkq - 0 1',
	knights: '8/8/2n2n2/8/8/2N2N2/8/8 w KQkq - 0 1',
	bishops: '8/1b4b1/8/8/8/8/1B4B1/8 w KQkq - 0 1',
	queens:  '8/8/4q3/8/8/3Q4/8/8 w KQkq - 0 1',
	kings:   '8/8/3k4/8/8/4K3/8/8 w KQkq - 0 1',
	pawns:   '8/pppp1ppp/4p3/8/8/3P4/PPP1PPPP/8 w KQkq - 0 1',

	zugzwang : '5k2/4n2K/3N4/2n5/5N2/8/8/8 w - - 0 1',

}
export const clone = (o) => JSON.parse(JSON.stringify(o));
export const onBoard = (x,y) => (x >= 0) && (x < 8) && (y >= 1) && (y <= 8);

