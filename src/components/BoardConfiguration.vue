<template>
  <div class="board-config">
    <div class="div-group">
        <label for="cols" class="my-label">Columns Number:</label>
        <input type="number" id="cols" name="cols" class="my-text" value="1" min="1" max="10">
    </div>
    <div class="div-group">
      <label for="rows" class="my-label">Rows Number:</label>
      <input type="number" id="rows" name="rows" class="my-text" value="1" min="1" max="10">
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
  methods: {
    createBoard() {
      let cols = document.getElementById("cols").value;
      let rows = document.getElementById("rows").value;

      let config = {};
      config.cols = cols;
      config.rows = rows;
      
      let token = this.randomKey();

      BoardBus.$emit('values-config', config);
      BoardBus.$emit('token-config', token);
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
