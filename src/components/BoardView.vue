<template>
  <div class="board-view">
    <h3> Cols: {{createBoard.cols}}</h3>
    {{createBoard.rows}}
    <table id="board" border="1"> 
    </table>
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
export default {
  name: 'board-bus',
  data() {
    return {
      createBoard: ''
    }
  },
  mounted() {
    BoardBus.$on('create-board', (cols, rows) => {
      let data = {};
      data.cols = cols;
      data.rows = rows;
      this.createBoard = data;
      console.log(data);
    })
  }
};
</script>

<style>
  .board-view {
    width: 45%;
    height: 400px;
    display: inline-block;
  }

  .board-td {
    padding: 10px;
  }
</style>