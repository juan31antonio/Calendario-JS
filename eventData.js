
function eventData(){
    var tittle = document.querySelector('h1').textContent;
    var description = document.querySelector('input').value;
    var time = document.getElementById('time').textContent;
    const event = {
        title: tittle,
        description: description,
        start: time
      }
      localStorage.clear();
      setTimeout(() => {
		  localStorage.setItem('evento', JSON.stringify(event));
	    }, 0);
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