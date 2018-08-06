<template>
  <div class="board-view">
    <h3>Board of {{cols}} x {{rows}}</h3>
    <div class="board-table">
      <table id="board">
        <tr v-for="row in rows">
          <td v-for="col in cols" :key="col*row"></td>
        </tr>      
      </table>
    </div>
  </div>
</template>

<script>
import { BoardBus } from '@/services/BoardBus';
export default {
  name: 'board-bus',
  data() {
    return {
      cols: 10,
      rows: 10,
    };
  },
  mounted() {
    BoardBus.$on('values-config', (value) => {
      this.cols = value.cols;
      this.rows = value.rows;
    })
  }
};
</script>

<style>
  .board-view {
    width: 55%;
    height: 500px;
    display: inline-block;
  }

  .board-table {
    width: 100%;
    height: 100%;
  }

  .board-table table {
    width: 100%;
    height: 80%;    
    border-collapse: collapse;
  }
  
  .board-table table, th, td {
    border: 1px solid black;
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