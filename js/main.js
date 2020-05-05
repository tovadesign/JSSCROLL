// Cambio estilo menu----

function menu_nav () {
	// obtener referencia objeto nav
	var nav = document.getElementById("nav");

	var logo1 = document.getElementById("logo1");
	var logo2 = document.getElementById("logo2");

	//guarda posición en eje x del scroll
	var posicion_scroll = window.pageYOffset;


	if (posicion_scroll <= 400) {
		nav.classList.remove("nav2");
		nav.className = ("nav1");
		logo1.style.display = "initial";
		logo2.style.display = "none";
		open.style.color = 'white';
	} else {
		nav.classList.remove("nav1");
		nav.className = ("nav2");
		logo1.style.display = "none";
		logo2.style.display = "initial";
		open.style.color = 'black';
	}
}

var open = document.getElementById("open");
var botones = document.getElementsByClassName("enlaces");
var menu = document.getElementById("contenedor_enlaces");
var cerrado = true;
var body = document.getElementsByClassName("hidden");
var filters = document.getElementsByClassName("filter");

function apertura() {
	if (cerrado) {
		menu.style.width = "50vw";
		cerrado = false;
	} else {
		menu.style.width = "0%";
		menu.style.overflow = 'hidden';
		cerrado = true;
	}

}

//añadir evento scroll 
window.addEventListener("load", function(){
	$("#preloader").fadeOut();
	body[0].classList.remove("hidden");
	menu_nav();

})
window.addEventListener("scroll", menu_nav);

// añadir apertura del menu

open.addEventListener("click", function(){
	apertura();
});

window.addEventListener("resize", function() {
	if (screen.width >= 700) {
		cerrado = true;
		menu.style.removeProperty ("overflow");
		menu.style.removeProperty ("width");

	}
});

window.addEventListener("click", function(e) {
	if (cerrado==false) {
		var span = document.querySelector("span");
		if (e.target !== span) {
			apertura();

		}
	}
});

// añade evento a botones con clase filter
for (let i = 0 ; i < filters.length; i++) {

	filters[i].addEventListener("click", function(){

		let objactual = filters[i];

		//añade clase active al elemento que se hace click
		filters[i].classList.add("active");
		
		// quita clase active de todos los elementos hermanos
		//del elemento que se hizo click
		let hermanos = filters[i].parentElement.children;

		for (let j = 0; j < hermanos.length; j++){
			if (hermanos[j] !== objactual){
				hermanos[j].classList.remove("active");
			}
		}

		// filtgra las imagenes cuya clase es igual al atrinuto
		// data-nombre del elemento que se hizo click
		let valorname = filters[i].getAttribute("data-nombre");
		let imagenes = document.getElementsByClassName(valorname);

		let todoswork = document.getElementById("galeriawork").children;

		for(let j= 0;j < todoswork.length; j++) {

			if (valorname == "todos") {
				todoswork[j].style.display = 'initial';    

			} else {

				let estasi = false;

				for (let k = 0; k < imagenes.length;k ++){
					if (todoswork[j] == imagenes[k]){
						estasi = true;
						break;
					}
				}

				if (estasi == true){
					todoswork[j].style.display = 'initial'; 
				} else {
					todoswork[j].style.display = 'none'; 
				}
			}
		}
		
		
	});
}
 // hacer scroll directo con el menu de inicio

var enlace_inicio = document.getElementById("enlace-inicio"),
 	enlace_equipo = document.getElementById("enlace-equipo"),
 	enlace_servicio = document.getElementById("enlace-servicio"),
 	enlace_trabajo = document.getElementById("enlace-trabajo"),
 	enlace_contacto = document.getElementById("enlace-contacto");


let equipo = document.getElementById("equipo").offsetTop,
 	servicio = document.getElementById("servicio").offsetTop,
 	trabajo = document.getElementById("trabajo").offsetTop, 
 	contacto = document.getElementById("contacto").offsetTop;

window.addEventListener("resize", function() {

 		equipo = document.getElementById("equipo").offsetTop;
 		servicio = document.getElementById("servicio").offsetTop;
 		trabajo = document.getElementById("trabajo").offsetTop;
 		contacto = document.getElementById("contacto").offsetTop;
 });
	
enlace_inicio.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({top: 0,
                     left: 0,
                     behavior: 'smooth'
                    });
});

enlace_equipo.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({top: equipo - 80,
                     left: 0,
                     behavior: 'smooth'
                    });
});

enlace_servicio.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({top: servicio - 80,
                     left: 0,
                     behavior: 'smooth'
                    });
});

enlace_trabajo.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({top: trabajo - 80,
                     left: 0,
                     behavior: 'smooth'
                    });
});

enlace_contacto.addEventListener("click", function(e){
	e.preventDefault();
	window.scrollTo({top: contacto - 80,
                     left: 0,
                     behavior: 'smooth'
                    });
});
