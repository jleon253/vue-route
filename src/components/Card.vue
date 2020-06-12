<template>
	<div class="card">
		<img class="card-img-top" src="https://via.placeholder.com/200x200" alt="Card image cap" />
		<div class="card-body">
			<h5 class="card-title">
        {{ info.titulo }}
      </h5>
			<p class="card-text">
				{{ info.descripcion}}
			</p>
      <router-link :to="{name:'parametro', params: {id: info.id}}" class="btn btn-raised btn-primary">Entrar</router-link>
		</div>
	</div>
</template>
<script>
export default {
  name: 'card',
  props: {
    info: Object
  }
}
</script>
