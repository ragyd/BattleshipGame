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
        <div title="1" class="ship-img"><img src="../../imgs/alabama.png" class="ship-img"></div>
        <div title="2" class="ship-img"><img src="../../imgs/yamato.png" class="ship-img"></div>
        <div title="3" class="ship-img"><img src="../../imgs/conqueror.png" class="ship-img"></div>
        <div title="4" class="ship-img"><img src="../../imgs/musashi.png" class="ship-img"></div>
        <div title="5" class="ship-img"><img src="../../imgs/destroyer.png" class="ship-img"></div>
      </div>
      <div class="options-container">
        <input type="button" id="button" name="button" value="Rotate" v-on:click="rotate()">
        <input type="button" id="button" name="button" value="Save" v-on:click="saveShipPositions()">
      </div>
    </div>
  </div>
</template>
<script>
import * as dragula from 'dragula';
import ShipLocation from '@/services/ShipLocation';

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
      const divArr = []
      const left = 'ship-container';
      divArr.push(document.getElementById(left));
      for(let i = 1; i <= this.rows; i++) {
        for(let j = 1; j <= this.cols; j++) {
          let right = i + '-' + j;
          divArr.push(document.getElementById(right));
        }
      }
      dragula(divArr);
    });
  },
  methods: {
    getBoard() {
      const boardGame = JSON.parse(localStorage.getItem('Board'));
      return Promise.resolve({
        rows: boardGame.rows,
        cols: boardGame.cols
      });
    },
    rotate() {
      alert("Rota?");
    },
    saveShipPositions() {
      let locationsArr = [];
      for(let i = 1; i <= this.rows; i++) {
        for(let j = 1; j <= this.cols; j++) {
          const box = document.getElementById(i + '-' + j).childNodes;
          if(box.length > 0)
          {
            locationsArr.push({
              positionY: i, 
              positionX: j, 
              type: parseInt(box[0].title),
              orientation: 'h'
            })
          }
        }
      }
      ShipLocation.location(locationsArr)
      .then((response) => {
        if(response!== null)
        alert("The location of the ships were positioned.");
      })
      .catch((error) => {
        alert(error);
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
