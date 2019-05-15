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
			<div v-for="rank in ranks" :key="rank" class="rank-tile">{{ rank }}</div>
			<div class="none-tile"></div>
		</div>
		<div class="FENhover">
			<div class="FENinput">
				<input type="text" v-model="fenInput" />
				<a @click="$store.commit('boardModule/setBoard');">Setup</a>
			</div>
		</div>
	</div>
</template>

<script>
import { files, ranks, setup } from '@/classes/Constants.js';
import { mapGetters } from 'vuex';

export default {
	name: 'ChessBoard',
	data(){
		return {
			files,
			ranks,
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
			if ( this.squares[rank][file] === '' ) return 'none';
			return this.squares[rank][file];
		}
	}
}
</script>