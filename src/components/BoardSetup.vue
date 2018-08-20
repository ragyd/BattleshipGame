<template>
  <div class="board-setup">
    <div class="board-container">
      <table id="board" class="board-table">
        <tr v-for="row in rows" v-bind:key="row">
          <td v-for="col in cols" v-bind:key="col" :id="row+'-'+col" style="margin: 0 auto;"></td>
        </tr>      
      </table>
    </div>
    <div class="board-ships">
      <div id="ship-container">
        <div title="ship1" class="ship-img"><img src="../../imgs/alabama.png" class="ship-img"></div>
        <div title="ship2" class="ship-img"><img src="../../imgs/yamato.png" class="ship-img"></div>
        <div title="ship3" class="ship-img"><img src="../../imgs/conqueror.png" class="ship-img"></div>
        <div title="ship4" class="ship-img"><img src="../../imgs/musashi.png" class="ship-img"></div>
        <div title="ship5" class="ship-img"><img src="../../imgs/destroyer.png" class="ship-img"></div>
      </div>
      <div class="options-container">
        <button>Rotate</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>
<script>
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
      this.cols = board.cols;
      this.rows = board.rows;
    })
    .then(() => {
      const left = 'ship-container';
      for(let i = 1; i <= this.rows; i++) {
        for(let j = 1; j <= this.cols; j++) {
          let right = i + '-' + j;
          dragula([document.getElementById(left), document.getElementById(right)], {
            copy: function (el, source) {
              return source === document.getElementById(left)
            },
            accepts: function (el, target) {
              return target !== document.getElementById(left)
            }
          });    
        }
      }
    });
  },
  methods: {
    getBoard() {
      const boardGame = JSON.parse(localStorage.getItem('Board'));
      return Promise.resolve({
        rows: boardGame.rows,
        cols: boardGame.cols
      });
    }
  }
}
</script>

<style>
#ship-container > .ship-img{
  padding: 15px;
  margin: 0 auto;
}
.ship-img {
  height: 20px;
  width: 30px;
}
.board-setup {
  height: 570px;
}
.board-container {
  width: 70%;  
  float: left;
  height: 500px;
}
.board-ships {
  padding: 20px;
  width:30%;
  float: left;
}
.options-container {
  padding: 20px;
}
</style>
