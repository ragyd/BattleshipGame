<template>
  <div class="home">
  	<h1>Battleship Game</h1>
    <board-view/>
    <board-token/>
  </div>
</template>

<script>
// @ is an alias to /src

import BoardView from '@/components/BoardView.vue';
import BoardToken from '@/components/BoardToken.vue';

export default {
  name: 'home',
  components: {
  	BoardView,
  	BoardToken
    
  } 
};
</script>
