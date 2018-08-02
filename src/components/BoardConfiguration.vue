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
      <input type="button" id="button" class="my-button" name="button" value="Create Board" @click="createTable()">
    </div>
    <div class="div-group">
      <input type="input" class="my-text" id="key" disabled>
    </div>    
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
export default {
  name: 'board-config',
  methods: {
    createTable()
    {
      let cols = document.getElementById("cols").value;
      let rows = document.getElementById("rows").value;

      let config = {cols, rows};

      BoardBus.$emit('create-table', config);

      let table = document.getElementById('board');

      while (table.hasChildNodes()) {
        table.removeChild(table.lastChild);
      }

      for(var rowIndex = 0; rowIndex < rows; rowIndex++)
      {
       var x = table.insertRow(rowIndex);
       for(var colIndex = 0; colIndex < cols; colIndex++)  
        {
          var y =  x.insertCell(colIndex);
          y.innerHTML="X";
          y.classList.add("board-td");
        }
      }

      document.getElementById("key").value = "HiThisIsAKey" + cols + rows;
    }
  }
};
</script>
<style>
  .my-button{
    text-decoration: none;
    text-align: center;
    padding: 10px;
    background: #4f9bd1;
    color: white;
    font-weight: 600;
    border: 2px solid black;
    border-radius: 5px;  
  }

  .my-button:hover, .my-button-blue:hover, .my-button-red:hover {
    box-shadow: 0 0 1em black;
    cursor: pointer;
    color: black;
  }

  .my-text {
    width: 85%;
    padding: 10px;
    border: 1px solid black;  
    border-radius: 3px;
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
    width: 45%;
    border: 1px solid #ccc;
    float: right;
    display: inline-block;
  }
</style>
