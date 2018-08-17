<template>
  <div class="board-setup">
    <div class="board-container">
      <table id="board">
        <tr v-for="(row, rowIndex) in rows" v-bind:key="row">
          <td v-for="(col, colIndex) in cols" :id="(rowIndex + 1)+'-'+(colIndex + 1)" v-bind:key="col">
            0
          </td>
        </tr>
      </table>
    </div>
    <div id="ship-container">
      <div title="ship1"><img src="../../imgs/alabama.png" class="ship-img"></div>
      <div title="ship2"><img src="../../imgs/yamato.png" class="ship-img"></div>
      <div title="ship3"><img src="../../imgs/conqueror.png" class="ship-img"></div>
      <div title="ship4"><img src="../../imgs/musashi.png" class="ship-img"></div>
      <div title="ship5"><img src="../../imgs/destroyer.png" class="ship-img"></div>
    </div>
    <button>Rotate</button>
    <button>Save</button>
  </div>
</template>
<script>
//const dragula = require('dragula');
import * as dragula from 'dragula';

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
        const boardGame = JSON.parse(localStorage.getItem('Board'));
        const game = JSON.parse(localStorage.getItem('Game'));
        const playerId = game['PlayerId1'];
        this.cols = boardGame.cols
        this.rows = boardGame.rows
      })
      .then(() => {
        for(let i = 1; i <= this.cols; i++) {
          for(let j = 1; j <= this.rows; j++) {
            dragula([
              document.getElementById('ship-container'),
              document.getElementById(i+'-'+j)], {
              copy: true
            })
          }
        }
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

<style>
.ship-img {
  height: 20px;
  width: 30px;
}
</style>
