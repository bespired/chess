	let dirs      = ['N','E','S','W','NE','SE','SW','NW','H'];
	let fileNext  = [ 1,  0 ,-1,  0,   1,   0,   0,   1,  0 ];
	let rankNext  = [ 0,  1 , 0, -1,   1,   1,  -1,  -1,  0 ];
	let frontNext = [ 0,  2,  1, -1, -2, -2, -1,  1,  2];
	let sideNext  = [ 0,  1,  2,  2,  1, -1, -2, -2, -1];

	let ranks    = [ '','A','B','C','D','E','F','G','H'];
	let routes= "directions= {\n";
	let nextFile, nextRank;
	for(let file= 1; file <= 8; file++){

		for(let rank= 1; rank <= 8; rank++){

			let letter= ranks[rank];
			routes += `  ${letter}${file}:{`;

			for(let dir in dirs){

				let dirletter = dirs[dir];
				let squares= [];

				for(let step= 1; step < 9; step++){

					if (dirletter === 'H')
					{
						nextFile = file + frontNext[step];
						nextRank = rank + sideNext[step];
					}else{
						nextFile = file + step * fileNext[dir];
						nextRank = rank + step * rankNext[dir];
					}
					if ((nextFile >= 1) && (nextFile <= 8)){
						if ((nextRank >= 1) && (nextRank <= 8)){
							let square = `'${ranks[nextRank]}${nextFile}'`;
							squares.push(square);
						}
					}
				}
				let reeks= squares.join(",");
				routes += `${dirletter}:[` + reeks + "],";
			}
			routes += `},` + "\n";
		}
	}
	routes += `}` + "\n";
	console.log(routes);