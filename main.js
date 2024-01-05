// Aqui agarro mis elementos HTML y los asigno a una variable para poder manipularlos con Javascript
const formulario = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");

// Creo una variable vacia la cual me va a servir como almacenamiento para informacion que quiera guardar deswpues
let selected = [];

// Emulacion de mi base de datos, en este caso tengo un Array con las diferentes cuentas
const cuentas = [
  { id: 22, nombre: "Pablo", saldo: '900.00', pin: "2222" },
  { id: 44, nombre: "Juan", saldo: '990.00', pin: "1234" },
  { id: 66, nombre: "Diego", saldo: '200.00', pin: "9876" },
];

// Tengo que crear un display dinamico de mis diferentes cuentas para poder mostrarlas en mi dropdown de opciones
// Con el metodo ".forEach()" paso por cada elemento de mi Array
cuentas.forEach((cuenta) => {
  // creo una variable para guardar mi funcion para crear un elemento HTML "option"
  let option = document.createElement("option");
  // utilizo programacion orientada a objetos para agregarle atributos a mi "option" en el HTML
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  // al final con este paso le digo al codigo que ese elemento "option" lo almacene debajo de "select", el cual asigne al principio del codigo
  select.appendChild(option);
});
// Ya tengo creadas las opciones para mis "cuentas", pero necesito hacer una logica para validar el PIN de cada cuenta
// Creo unas constante la cual va a tener una funcion flecha que acepta las variables "id" y "pin"


const validatePIN = (id, pin) => {
  // Hasta aqui es donde le voy a ingresar un valor a mi variable selected
  // primero agarro mi Array de "cuentas" y uso el metodo ".filter"
  selected = cuentas.filter((cuenta) => {
    // Va a pasar por cada uno de los elementos dentro de "cuentas" y unicamente me va a regresar el que coincide con el "id" que le ingresare a mi funcion, con "parseInt" me aseguro que solo se acepten numeros enteros
    return cuenta.id === parseInt(id);
  });
  // Al ya tener algo dentro de "selected", comienzo mi validacion.

  // Le digo que si el elemento en la primera posicion dentro de "selected", si su pin, es igual al pin ingresado en la funcion va a tener que ejecutar la siguiente logica
  if (selected[0].pin === pin) {
    // primero le dira "Bienvenido"
    alert("Bienvenido");
    // despues agarrara mi elemento HTML "wrapper" (el cual seleccione al principio del codigo) y lo vaciara
    wrapper.innerHTML = "";
    // Una vez vaciado, utilizo la funcion "renderMenu" la cual cree en mi documento "menu.js" y le inserto el atributo "nombre" del elemento dentro de "selected"
    renderMenu(selected[0].nombre);
    // La razon por la que puedo llamar esta funcion desde aqui, aun que no tengo el import/export de la inicialization de la funcion en "menu.js", es por que el archivo que se esta corriendo es "index.html" y como ahi estoy llamando a ambos archivos js, el html tiene accesso a la informacion en ambos
  } else {
    alert("Intenta nuevamente");
  }
};


// Aqui esta la logica que se ejecuta cuando le doy submit a mi "form" de seleccionar un usuario
formulario.addEventListener("submit", (event) => {
  // Cancelo el "refresh" que genera por default mi boton de "submit"
  event.preventDefault();
  // creo una variable llamada "user_id" para almacenar el id. al ya tener seleccionado el form uso .target para buscar el elemento con el nombre "cuenta" y agarrar su valor el cual sera el id
  let user_id = event.target["cuenta"].value;
  // atraves de un prompt en el front, almacenare esa informacion en la variable pin
  let pin = prompt("Ingrese su pin", "");
  // Hasta este punto empieza la validacion
  if (pin != null) {
    // si mi variable pin, NO es igual a "null", ejecutare mi funcion "validate PIN" en la cual uso las variables "user_id" y "pin"
    validatePIN(user_id, pin);
  }
});