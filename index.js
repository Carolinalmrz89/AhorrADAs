// SECCIONES
const sectionOperaciones = document.querySelector("#section-operaciones");
const sectionNuevaOperacion = document.querySelector("#section-nueva-operacion");
const sectionCategorias = document.querySelector("#section-categorias");
const sectionBalance = document.querySelector("#section-balance");
const sectionReportes = document.querySelector("#section-reportes");
const cardOperaciones = document.querySelector("#card-operaciones");

// BOTONES
const btnNavBalance = document.querySelector("#btn-nav-balance");
const btnNavCategorias = document.querySelector("#btn-nav-categorias");
const btnNavReportes = document.querySelector("#btn-nav-reportes");
const btnNuevaOperacion = document.querySelector("#btn-nueva-operacion");

btnNavCategorias.onclick = (e) =>{
  e.preventDefault();
  sectionCategorias.classList.remove("is-hidden");
  sectionOperaciones.classList.add("is-hidden");
  sectionReportes.classList.add("is-hidden");
  sectionNuevaOperacion.classList.add("is-hidden");
};

btnNavReportes.onclick = (e) =>{
  e.preventDefault();
  sectionReportes.classList.remove("is-hidden");
  sectionOperaciones.classList.add("is-hidden");
  sectionCategorias.classList.add("is-hidden");
  sectionNuevaOperacion.classList.add("is-hidden");
}

btnNuevaOperacion.onclick = (e) =>{
  e.preventDefault();
  sectionNuevaOperacion.classList.remove("is-hidden");
  sectionReportes.classList.add("is-hidden");
  sectionOperaciones.classList.add("is-hidden");
  sectionCategorias.classList.add("is-hidden");
}



let operaciones = [
  {
    descripcion: "Sueldo",
    categoria: "Trabajo",
    fecha: "01/01/2021",
    monto: 50000,
    tipo: "Ganancia",
  },
  {
    descripcion: "Pago de alquiler",
    categoria: "Alquiler",
    fecha: "02/01/2021",
    monto: 15000,
    tipo: "Gasto",
  },
  {
    descripcion: "Pago de expensas",
    categoria: "Alquiler",
    fecha: "02/01/2021",
    monto: 5000,
    tipo: "Gasto",
  },
  {
    descripcion: "Pago de internet",
    categoria: "Servicios",
    fecha: "10/01/2021",
    monto: 2000,
    tipo: "Gasto",
  },
  {
    descripcion: "Trabajo freelance",
    categoria: "Trabajo",
    fecha: "15/01/2021",
    monto: 20000,
    tipo: "Ganancia",
  },
  {
    descripcion: "Cena con amigas",
    categoria: "Salidas",
    fecha: "18/01/2021",
    monto: 1500,
    tipo: "Gasto",
  },
];

const convertirOperacionesAHtml = (array) =>{

  const estructuraHTML =  array.reduce((acc, elemento, index) => {
      return acc +
        `
          <div class="columns is-align-items-center">
            <div class="column is-3 has-text-weight-semibold">   
              <p>${elemento.descripcion}</p>
            </div>
            
            <div class="column is-3 ">   
              <p class="tag">${elemento.categoria}<p>
            </div>
  
            <div class="column is-2 has-text-right">
              <p class="has-text-grey">${elemento.fecha}</p>
            </div>
  
            <div class="column is-2 has-text-right is-align-items-center has-text-danger has-text-weight-bold ">
              <p>$${elemento.monto}</p>
            </div>
               
            <div class="column is-2 has-text-right">   
              <p>
                <button class="button is-ghost is-small boton-editar" id="boton-editar-${index}">Editar</button>
                <button class="button is-ghost is-small boton-eliminar" id="boton-eliminar-${index}">Eliminar</button>
              </p>
            </div>
          </div>    
        `
    }, ``);

    const cuerpoOperaciones = document.querySelector("#cuerpo-operaciones"); 

    cuerpoOperaciones.innerHTML = estructuraHTML;

    crearBotonesEliminar();
};

const crearBotonesEliminar = () =>{
  const botonesEliminar = document.querySelectorAll(".boton-eliminar");
  
  for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].onclick = () =>{
      console.log("aber");
      const idRecortado = botonesEliminar[i].id.slice(15)
      idDelBoton = Number(idRecortado);
    
      const arrayFiltrado = operaciones.filter((elemento, index) =>{
        return index !== idDelBoton;
      });
      operaciones = arrayFiltrado;
      convertirOperacionesAHtml(arrayFiltrado);
    }
  }
}


const crearFormularioEditar = (id) =>{
  const formEdicion = document.querySelector("")
}
const crearBotonesEditar = () =>{
  const botonesEditar = document.querySelectorAll(".boton-editar");
  
  for (let i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].onclick = () =>{
      console.log("aber");
      const idRecortado = botonesEditar[i].id.slice(13)
      idDelBoton = Number(idRecortado);
    
      crearFormularioEditar();
    }
  }
}

convertirOperacionesAHtml(operaciones);




