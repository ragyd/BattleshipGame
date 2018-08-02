<template>
  <div class="board-config">
    <div class="div-group">
        <label for="cols" class="my-label">Columns Number:</label>
        <input type="number" id="cols" name="cols" class="my-text" min="1" max="50" v-model="ColsConfig">
    </div>
    <div class="div-group">
      <label for="rows" class="my-label">Rows Number:</label>
      <input type="number" id="rows" name="rows" class="my-text" min="1" max="50" v-model="RowsConfig">
    </div>
    <div class="div-group">
      <input type="button" id="button" class="my-button" name="button" value="Create Board" @click="createBoard()">
    </div> 
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
export default {
  name: 'board-config',
  data() {
    return {
      RowsConfig: 1,
      ColsConfig: 1
    }
  },  
  methods: {
    createBoard() {
      let cols = this.ColsConfig;
      let rows = this.RowsConfig;

      if((cols <= 50 && cols > 0) && (rows <= 50 && rows > 0)) {
        let config = {};
        config.cols = cols;
        config.rows = rows;
        
        let token = this.randomKey();

        BoardBus.$emit('values-config', config);
        BoardBus.$emit('token-config', token);
      } else {
        alert("The values of the number of rows or columns couldn't be more than 60 or less than 1.");
      }
    },
    randomKey() {
      return Math.random().toString(36).substr(2);
    }
  }
};
</script>
<style>
  .my-button{
    text-align: center;
    font-weight: 600;
    padding: 10px; 
  }

  .my-button:hover {
    cursor: pointer;
  }

  .my-text {
    width: 85%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 3px;
  }
  .my-text-disabled {
    border: 1px solid grey;
    background: #ddd;
    font-style: italic;
  }

  .my-label {
    float: left;
    margin-left: 10px;
    text-align: left;
    width: 100%;
    padding: 10px 10px 10px 0px;
    font-weight: bold;
  }

  .div-group {
    padding: 10px;
  }

  .board-config {
    border: 1px solid #ccc;
    flex: right;
    display: inline-block;
    margin-bottom: 20px;
  }
</style>
