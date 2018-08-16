<template>
	<div class="board-setup">
		<div class="board-container">
			<table>
				<tr v-for="(row, rowIndex) in rows">
					<td v-for="(col, colIndex) in cols" :id="(rowIndex + 1)+'-'+(colIndex + 1)">
						0
					</td>
				</tr>
			</table>
		</div>
		<div class="ship-container">
			<div>ship1</div>
			<div>ship2</div>
			<div>ship3</div>
			<div>ship4</div>
			<div>ship5</div>
		</div>
		<button>Rotate</button>
		<button>Save</button>
	</div>
</template>
<script>
export default {
	name: 'BoardSetup',
	data() {
		return {
			cols: 0,
			rows: 0
		}
	},
	mounted() {
	  this.getBoard()
	  	.then(board => {
	  		this.cols = board.cols
	  		this.rows = board.rows
	  	})
	},
	methods: {
		getBoard() {
			return Promise.resolve({
				rows: 10,
				cols: 15
			})
		}
	}
}
</script>