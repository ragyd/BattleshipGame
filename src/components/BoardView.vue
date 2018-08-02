<template>
  <div class="board-view">
    <h3>Board of {{ValuesConfig.cols}} x {{ValuesConfig.rows}}</h3>
    <div class="center">
      <table id="board" border="1"> 
      </table>
    </div>
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
export default {
  name: 'board-bus',
  data() {
    return {
      ValuesConfig: ''
    }
  },
  mounted() {
    BoardBus.$on('values-config', (value) => {
      this.ValuesConfig = value;
      this.drawBoard(value.cols, value.rows)
    })
  },
  methods: {
    drawBoard(cols, rows) {
      let table = document.getElementById('board');
      this.clearBoard(table);

      for(var rowIndex = 0; rowIndex < rows; rowIndex++)
      {
       var x = table.insertRow(rowIndex);
       for(var colIndex = 0; colIndex < cols; colIndex++)  
        {
          var y =  x.insertCell(colIndex);
          //y.innerHTML="X";
          y.classList.add("board-td");
        }
      }
    },
    clearBoard(table) {
      while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
      }
    }
  }
};
</script>

<style>
  .board-view {
    width: 55%;
    height: 500px;
    display: inline-block;
  }

  .board-td {
    padding: 15px;
    box-sizing: border-box;
  }
  .center {
    text-align: center;
  }
  .center table {
    margin: 0 auto;
    text-align: left;
  }
  @media screen and (max-width: 500px) {
    .board-view {
      width:100%;
    }
    
    .board-token {
      width:100%;
    }
  }  
</style>