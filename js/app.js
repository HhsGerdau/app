
const router = new VueRouter({
	routes: [
		{path: '/', component: Inicio},
		{path: '/autor/:autor', component: Autor},
		{path: '*', component: NoEncontrado}
	]
});

const app = new Vue({
	router,
	data(){
		return {
			autores: json.autores,
			mostrarFormulario: false,
			nuevoAutor: {
				imagen: '',
				nombre: '',
				descripcion: ''
			}
		}
	},
	
	methods: {
		agregarAuthor: function(){
			this.autores.push({
				id: json.autores.length + 1,
				nombre: this.nuevoAutor.nombre,
				imagen: this.nuevoAutor.imagen,
				descripcion: this.nuevoAutor.descripcion,
			});

			this.limpiarFormulario();
		},
		
		limpiarFormulario: function(){
			this.nuevoAutor = {
				imagen: '',
				nombre: '',
				descripcion: ''
			};
		}
	}
}).$mount('#app');