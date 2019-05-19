<template>
	<div class="chessboard" >
		<div class="row" v-for="file in files" :key="file" >
			<div v-for="(rankletter, ranknumber) in ranks"
					:key="`${rankletter}${file}`"
					:class="tile(ranknumber, file)">
				<div class="file-number" v-if="ranknumber==0">{{ file }}</div>
				<div class="rank-letter" v-if="file==1">{{ rankletter }}</div>
				<i :class="pieceOn(rankletter, file)" />
			</div>
			<!-- <div class="none-tile"></div> -->
		</div>
 			<div class="FENhover">
			<div class="FENinput">
				<input type="text" v-model="fenInput" />
			</div>
			<div class="FENsetup">
				<template v-for="key in Object.keys(positions)">
					<a @click="fenInput=positions[key]">{{ key }}</a>
				</template>
			</div>
		</div>
	</div>
</template>

<script>

import { files, ranks, piece, positions } from '@/classes/Constants.js';
import { mapGetters } from 'vuex';

export default {
	name: 'ChessBoard',
	data(){
		return {
			files,
			ranks,
			positions,
		}
	},

	computed: {
    	...mapGetters({
      		squares: 'boardModule/squares',
    	}),
    	fenInput: {
            get () { return this.$store.getters['boardModule/fenInput']; },
            set (value) {   this.$store.commit('boardModule/fenInput', value); }
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
			let squares = this.squares.get(`${rank}${file}`);
			if ( !squares ) return 'none';
			return piece[squares.color][squares.type];
		}
	}
}
</script>