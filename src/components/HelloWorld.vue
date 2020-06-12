<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <p>El router oficial de Vue.js</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>