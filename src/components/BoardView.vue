<template>
  <div class="board-view">
    <h3>{{createBoard.cols}}</h3>
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
    BoardBus.$on('create-board', (value) => {
      this.createBoard = value;
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

  @media screen and (max-width: 500px) {
    .board-view {
      width:100%;
    }
    
    .board-config {
      width:100%;
    }
  }  
</style>