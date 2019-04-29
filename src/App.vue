<template>
  <div id="app">
    <ChessBoard/>
  </div>
</template>

<script>
import ChessBoard from './components/ChessBoard.vue'

export default {
  name: 'app',
  components: {
    ChessBoard
  }
}
</script>