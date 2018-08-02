<template>
  <div class="board-token">
    <h3>Board Configuration</h3>
    <board-configuration/>
    <div class="div-group">
      <input type="input" class="my-text my-text-disabled" id="key" v-model="TokenConfig" disabled>
      <div class="div-group">
        <input type="button" id="button" class="my-button" name="button" value="Join this Game" @click="joinGame()">
      </div>
    </div>    
  </div>
</template>

<script>
import {BoardBus} from '@/services/board-bus';
import BoardConfiguration from '@/components/BoardConfiguration.vue';
export default {
  name: 'board-token',
  components: {
    BoardConfiguration
  },
  data() {
    return {
      TokenConfig: ''
    }
  },
  mounted() {
    BoardBus.$on('token-config', (data) => {
      this.TokenConfig = data;
    })
  },  
  methods: {
    joinGame() {
      alert('Join with this URL: ' + this.TokenConfig);
    }
  }
};
</script>
<style>
  .my-text-disabled {
    border: 1px solid grey;
    background: #ddd;
    font-style: italic;
    text-align: center;
  }

  .board-token {
    width: 35%;
    float: right;
    display: inline-block;
  }

  * {
    box-sizing: border-box;
  }
</style>
