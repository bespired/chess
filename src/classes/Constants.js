export const files = [ 8, 7, 6, 5, 4, 3, 2, 1 ];
export const ranks = ['A','B','C','D','E','F','G','H'];
export const lookup= "-12345678--PNBRQKpnbrqk";
export const emptyBoard = {
	A:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	B:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	C:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	D:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	E:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	F:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	G:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''},
	H:{1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''}
};

export const mnemonics= {
	P: 'white-pawn', N: 'white-knight', B: 'white-bishop', R: 'white-rook', Q: 'white-queen', K: 'white-king',
	p: 'black-pawn', n: 'black-knight', b: 'black-bishop', r: 'black-rook', q: 'black-queen', k: 'black-king',
};

export const setup= 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export const clone = (o) => JSON.parse(JSON.stringify(o));
export const onBoard = (x,y) => (x >= 0) && (x < 8) && (y >= 1) && (y <= 8);
