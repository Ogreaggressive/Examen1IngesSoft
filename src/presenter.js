//import sumar from "./sumador";

const texto = document.querySelector("#TODO");
const button = document.querySelector("#addButton");

const div = document.querySelector("#addedTodo");

button.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(texto.value)
  div.innerHTML = "<p>" + texto.value+ "</p>";
});
