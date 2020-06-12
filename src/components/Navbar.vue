<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
		<a class="navbar-brand" href="#">Vue Routes</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link>
				</li>
				<li class="nav-item">
          <router-link to="/acerca" class="nav-link">Acerca de</router-link>
				</li>
				<li class="nav-item">
          <router-link to="/parametros" class="nav-link">Parametros</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
<style scoped>
  a.router-link-exact-active{
    color: #42b983 !important;
    font-weight: 700;
  }
</style>
