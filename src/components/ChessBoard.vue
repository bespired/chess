<template>
	<div class="chessboard" >
		<div class="row" v-for="file in [8,7,6,5,4,3,2,1]" :key="file" >
			<div class="file-tile">{{ file }}</div>
			<div v-for="(rankletter, ranknumber) in ['A','B','C','D','E','F','G','H']"
				:key="`${rankletter}${file}`"
				:class="tile(ranknumber, file)">
				<!-- draw the piece -->
			</div>
			<div class="none-tile"></div>
		</div>
		<div class="row">
			<div class="none-tile"></div>
			<div v-for="rank in ['A','B','C','D','E','F','G','H']" :key="rank" class="rank-tile">
				{{ rank }}
			</div>
			<div class="none-tile"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ChessBoard',
	methods: {
		tile(rank, file) {
			return ((file % 2) + (rank % 2)) % 2 === 0
				? "light-tile"
				: "dark-tile"
			;
		},
	}
}
</script>