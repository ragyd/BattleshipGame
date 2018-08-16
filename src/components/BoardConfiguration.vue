<template>
  <div class="board-config">
    <div class="div-group">
        <label for="cols" class="my-label">Columns Number:</label>
        <input type="number" name="cols" class="my-text" min="10" max="30" v-model.number="cols" v-on:change="createBoard()" v-on:keyup.enter="createBoard()">
        <label class="label-error">{{messageCols}}</label>
    </div>
    <div class="div-group">
      <label for="rows" class="my-label">Rows Number:</label>
      <input type="number" name="rows" class="my-text" min="10" max="30" v-model.number="rows" v-on:change="createBoard()" v-on:keyup.enter="createBoard()">
      <label class="label-error">{{messageRows}}</label>
    </div>
    <div class="div-group">
      <input type="button" id="button" class="my-button" name="button" value="Create Game" v-on:click="createGame(cols, rows)">
    </div>
    <label class="message-game">{{messageGame}}</label>
<div class="container">
  <h1>Drag & Drop</h1>
  <div class="left">
    <div id="drag-elements">
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </div>

    <div id="drop-target">

    </div>
  </div>
 </div>    
  </div>
</template>

<script>
import { BoardBus } from '@/services/BoardBus';
import CreateGame from '@/services/CreateGame';
const dragula = require('dragula');

export default {
  name: 'board-config',
  mounted: function(){
    this.drag()
  },
  data() {
    return {
      rows: 10,
      cols: 10,
      messageCols : '',
      messageRows : '',
      messageGame : ''
    }
  },  
  methods: {
    drag() {
      alert("hola")
      dragula([
        document.getElementById('drag-elements'),
        document.getElementById('drop-target')], {
        copy: true
      });
    },
    createBoard() {
          //localStorage.clear()
      this.messageCols = this.validateValue(this.cols);
      this.messageRows = this.validateValue(this.rows);
      if(this.messageCols === null && this.messageRows === null)
      {
        BoardBus.$emit('values-config', {
          cols: this.cols,
          rows: this.rows,
        });
//localStorage.setItem('Account', JSON.stringify(response));        
        return true;
      }
        return false;
    },
    createGame(cols, rows) {
      BoardBus.$emit('token-link', '');      
      if(this.createBoard()) {
        CreateGame.create({cols, rows})
        .then((response) => {
          BoardBus.$emit('token-link', response.data);
          this.messageGame = "The game was created."
        })
        .catch((error) => {
          this.messageGame = error;
        });
      } else {
        this.messageGame = "The game couldn't be created because the values of the board are invalid."
      }
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

  .label-error {
    width: 100%;
    font-size: 80%;
    float: left;
    color: red;
  }

  .message-game {
    font-size: 90%;
    color: black;
    text-align: center;
    font-weight: bold;
  }

  .div-group {
    padding: 10px;
    margin-bottom: 10px;
  }

  .board-config {
    width: 100%;
    border: 1px solid #ccc;
    flex: right;
    display: inline-block;
    margin-bottom: 20px;
  }

  #drag-elements {
  display: block;
  background-color: #dfdfdf;
  border-radius: 5px;
  min-height: 50px;
  margin: 0 auto;
  padding: 2em;
}

#drop-target {
  border: 2px dashed #D9D9D9;
  border-radius: 5px;
  min-height: 200px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 2em;
  display: block;
  text-align: center;
}

</style>
