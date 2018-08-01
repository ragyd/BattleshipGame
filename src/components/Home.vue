<template>
  <div class="home">
  	<h1>Battleship Game</h1>
    <board-view/>
    <board-configuration/>
  </div>
</template>

<script>
// @ is an alias to /src

import BoardView from '@/components/BoardView.vue';
import BoardConfiguration from '@/components/BoardConfiguration.vue';

export default {
  name: 'home',
  components: {
  	BoardView,
  	BoardConfiguration
  }  
};
</script>
