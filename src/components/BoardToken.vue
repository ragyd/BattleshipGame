<template>
  <div class="board-token">
    <h3>Board Configuration</h3>
    <board-configuration/>
    <div class="div-group">
      <input type="input" class="my-text my-text-disabled" id="key" v-model="tokenLink" disabled>
      <div class="div-group">
        <input type="button" id="button" class="my-button" name="button" value="Join this Game" @click="joinGame(tokenLink)">
      </div>
    </div>    
  </div>
</template>

<script>
import { BoardBus } from '@/services/BoardBus';
import BoardConfiguration from '@/components/BoardConfiguration.vue';
import JoinGame from '@/services/JoinGame';
export default {
  name: 'board-token',
  components: {
    BoardConfiguration
  },
  data() {
    return {
      tokenLink: ''
    }
  },
  mounted() { 
    BoardBus.$on('token-link', (data) => {
      this.tokenLink = data.session;
    })
  },  
  methods: {
    joinGame(tokenLink) {
      JoinGame.join(tokenLink)
        .then((response) => {
          alert('Join with this URL:\n' + this.tokenLink);
          response.data;
        })
        .catch((error) => {
          alert('ERROR: ' + error);
        });
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
