<template>
  <div class="row">
    <div class="col-12">
      <h3 class="mr-2">Esta es la página de:</h3>
      <h3><b>Título {{this.$route.params.id}}</b></h3>
    </div>
    <div class="col-12">
      <img src="https://via.placeholder.com/700x500" alt="banner" class="img-fluid d-block mx-auto"/>
    </div>
    <div class="col-6 offset-3 mt-3">
      <button type="button" class="btn btn-success btn-raised btn-block" @click="regresar">Regresar</button>
    </div>
  </div>
</template>
<script>
export default {
  methods :{
    regresar(){
      return this.$router.go(-1);
    }
  }
}
</script>