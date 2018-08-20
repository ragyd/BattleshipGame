<template>
  <div class="board-token">
    <h3>Board Configuration</h3>
    <board-configuration/>
    <div class="div-group">
      <label for="rows" class="my-label center">Invite to your friend with the next link:</label>
      <textarea name="" :value="tokenLink" type="input" id="key" class="my-text-disabled"></textarea>
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
    background: #efefef;
    font-style: italic;
    border-radius: 3px;
    font-size: 11px;
    height: 40px;
    width: 100%;
  }

  .board-token {
    width: 35%;
    float: right;
    display: inline-block;
  }

  .center {
    text-align: center;
    font-size: 14px;
  }

  * {
    box-sizing: border-box;
  }
</style>
