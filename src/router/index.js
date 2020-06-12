import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Parametros from '../views/examples/Parameters.vue'
import Parametro from '../views/examples/Parameter.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/acerca',
		name: 'Acerca',
		component: About
	},
	{
		path: '/parametros',
		name: 'Parametros',
		component: Parametros,
	},
	{
		path: '/parametro/:id',
		name: 'parametro',
		component: Parametro,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
