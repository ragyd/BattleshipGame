<template>
  <div class="board-config">
    <div class="div-group">
        <label for="cols" class="my-label">Columns Number:</label>
        <input type="number" name="cols" class="my-text" min="1" max="50" v-model.number="cols" v-on:change="createBoard()" v-on:keyup.enter="createBoard()">
        <span v-model="messageCols" class="my-span"></span>
    </div>
    <div class="div-group">{{messageRows}}
      <label for="rows" class="my-label">Rows Number:</label>
      <input type="number" name="rows" class="my-text" min="1" max="50" v-model.number="rows" v-on:change="createBoard()" v-on:keyup.enter="createBoard()">
        <span class="my-span">{{messageRows}}</span>
    </div>
    <div class="div-group">
      <input type="button" id="button" class="my-button" name="button" value="Create Board" v-on:click="createBoard()">
    </div> 
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
export default {
  name: 'board-config',
  props: ['wrongRowsNumber', 'wrongColumnsNumber'],
  data() {
    return {
      rows: 10,
      cols: 10,
      messageCols : this.validateValue(parseInt(this.cols)),
      messageRows : this.validateValue(parseInt(this.rows))
    }
  },  
  methods: {
    createBoard() {
      if(this.messageCols === null && this.messageRows === null)
      {
        BoardBus.$emit('values-config', {
          cols: this.cols,
          rows: this.rows,
        });
        BoardBus.$emit('token-config', this.randomKey());
      }
      else {
        console.log(this.messageCols)
        /*if(messageCols === null)

        if(messageRows === null)*/
      }
    },
    randomKey() {
      return Math.random().toString(36).substr(2);
    },
    validateValue(value){
      if (value > 30 || value < 10) {      
        return 'The value could not be more than 30 or less than 10.';
      }
      return null;
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

  .my-span {
    margin-left: 10px;
    font-size: 80%;
    text-align: center;
    width: 100%;
    color: red;
    padding: 10px 10px 10px 0px;
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
