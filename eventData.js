var event;
export function obtenerNombre() {
  return event;
}


function eventData(){
    localStorage.clear();
    var tittle = document.querySelector('h1').textContent;
    var description = document.querySelector('input').value;
    var time = document.getElementById('time').textContent;
    event = {
        title: tittle,
        description: description,
        start: time
      }
      localStorage.setItem("evento",JSON.stringify(event),function() {
  // Obtener el valor de la variable "nombre"
  var nombre = localStorage.getItem("nombre");
})
      console.log(localStorage.getItem("evento"));
      
}

document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById("close");

miBoton.addEventListener("click", () => {
  // Función que se ejecuta al hacer clic en el botón
  window.parent.postMessage({
    type: "swal-confirm",
  }, "*");
});
});