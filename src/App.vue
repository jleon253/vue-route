<template>
  <div id="app">
    <Navbar />
    <div class="container my-3">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>

</style>
