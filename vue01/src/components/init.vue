<template>
  <div class="init">
    <h1>{{msg}}</h1>
    <A></A>

  </div>
</template>

<script>
import A from "./A"

export default {
  name: 'init',
  components: {
            A
        },
  data () {
    return {
      msg: 'Init'
    }
  }
}
</script>


