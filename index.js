const operaciones = [
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

const cuerpoOperaciones = document.querySelector("#cuerpo-operaciones");

const estructuraHTML = (operaciones) => {
  let acc = ``;

  operaciones.map((operacion) => {
    acc =
      acc +
      `
        <div class="columns is-align-items-center">
          <div class="column is-3 has-text-weight-semibold">   
            <p>${operacion.descripcion}</p>
          </div>
          
          <div class="column is-3 ">   
            <p>${operacion.categoria}</h5>
          </div>

          <div class="column is-2 has-text-right">
            <p class="has-text-grey">${operacion.fecha}</p>
          </div>

          <div class="column is-2 has-text-right is-align-items-center has-text-danger has-text-weight-bold ">
            <p>$${operacion.monto}</p>
          </div>
             
          <div class="column is-2 has-text-right">   
            <p>
              <button class="button is-ghost is-small">Editar</button>
              <button class="button is-ghost is-small">Eliminar</button>
            </p>
          </div>
        </div>    
      `;
    return acc;
  });
  cuerpoOperaciones.innerHTML = acc;
};

estructuraHTML(operaciones);
