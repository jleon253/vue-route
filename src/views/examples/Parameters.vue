<template>
  <div class="row">
    <div class="col-12">
      <h2>Ejemplo: Rutas con parámetros</h2>
    </div>
    <div class="col-12">
      <div class="card-columns mt-4">
        <Card v-for="el in elements" :key="el.id" :info="el"/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  components:{
    Card
  },
  data(){
    return {
      elements: [
        {id:1, titulo: 'Título 1', descripcion: 'Esta es una pequeña descripción'},
        {id:2, titulo: 'Título 2', descripcion: 'Esta es una pequeña descripción'},
        {id:3, titulo: 'Título 3', descripcion: 'Esta es una pequeña descripción'},
        {id:4, titulo: 'Título 4', descripcion: 'Esta es una pequeña descripción'},
        {id:5, titulo: 'Título 5', descripcion: 'Esta es una pequeña descripción'},
        {id:6, titulo: 'Título 6', descripcion: 'Esta es una pequeña descripción'},
      ]
    }
  }
}
</script>