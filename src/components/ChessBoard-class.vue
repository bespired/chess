<template>
	<div class="chessboard" >
		<div class="row" v-for="file in files" :key="file" >
			<div class="file-tile">{{ file }}</div>
			<div v-for="(rankletter, ranknumber) in ranks"
					:key="`${rankletter}${file}`"
					:class="tile(ranknumber, file)">
				<i :class="pieceOn(rankletter, file)" />
			</div>
			<div class="none-tile"></div>
		</div>
		<div class="row">
			<div class="none-tile"></div>
			<div v-for="rank in ranks"
					:key="rank" class="rank-tile">
				{{ rank }}
			</div>
			<div class="none-tile"></div>
		</div>
	</div>
</template>

<script>
import { setup } from '@/classes/Constants.js';

export default {
	name: 'ChessBoard',
	data(){
		// console.log(setup);
		return {
			files: [ 8, 7, 6, 5, 4, 3, 2, 1],
			ranks: ['A','B','C','D','E','F','G','H'],
			squares: setup
		}
	},
	methods: {
		tile(rank, file) {
			return ((file % 2) + (rank % 2)) % 2 === 0
				? "light-tile"
				: "dark-tile"
			;
		},
		pieceOn(rank, file) {
			if ( this.squares[rank][file] === undefined ) return 'none';
			return this.squares[rank][file];
		}
	}
}
</script>