//import sumar from "./sumador";

const texto = document.querySelector("#TODO");
const button = document.querySelector("#addButton");

const div = document.querySelector("#addedTodo");

button.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(texto.value.length)
  if (texto.value.length > 0 && texto.value.length < 50)
  {
    div.innerHTML = "<p>" + texto.value+ "</p>";
  }
  else if(texto.value.length > 50)
  {
    div.innerHTML = "<p> la descripcion escrita es muy grande</p>";
  }
  else if(texto.value.length == 0)
  {
    div.innerHTML = "<p> No es posible registrar una tarea pendiente sin descripción</p>";
  }
});
