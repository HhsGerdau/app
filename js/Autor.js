
const Autor = {
	template: `
		<div class="c-autores" v-if="datos">
			<h1 class="text-right">{{ datos.nombre }}</h1>
			<div class="thumbnail">
				<img :src="datos.imagen" class="foto-autor">
				<div class="caption" v-if="datos.descripcion">
					<p>{{ datos.descripcion }}</p>
				</div>
			</div>

			<h3>OBRAS LITERARIAS <small>{{ datos.libros.length }}</small></h3>
			<div v-if="!datos.libros.length">
				Las obras literarias de este escritor todavia no han sido registrados en el archivo de datos.
			</div>
			<ul v-else class="listu">
				<li v-for="libro in datos.libros">
					<div class="row">
						<div class="coln">
							<h3>{{ libro.nombre }} <small>{{ libro.lanzamiento }}</small></h3>
						</div>
					</div>
					<div class="row">
						<div class="colm">
							<img  :src="libro.portada" :alt="libro.nombre"
							class="plibro">
						</div>
						</div>
					</div>
					<hr>
				</li>
			</ul>
		</div>
	`,
	data(){
		return{
			datos : {}
		}
	},
	methods: {
		obtenerInfo: function(){
			var paramAutor = this.$route.params.autor,
			consulta = json.autores.find(function(el){
				return el.id == paramAutor;
			});

			if(!consulta){
				this.$router.push('/');
			}
			this.datos = consulta;
		}
	},
	created: function(){
		this.obtenerInfo();
	},
	watch: {
		'$route': function(newRoute, currentRoute){
			this.obtenerInfo();
		}
	}
};