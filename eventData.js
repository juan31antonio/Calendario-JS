function eventData(){
  var divs = document.querySelectorAll('#arrows > div');
  var activeColor = null;
  var colorMap = {
      "verde": "#008000",
      "naranja": "#FFA500",
      "rojo": "#FF0000",
      "morado": "#800080",
      "azul": "#0000FF",
      "cyan": "#00FFFF"
  };
  divs.forEach(function(div) {
      if (div.style.visibility === "visible" && Object.keys(colorMap).includes(div.id)) {
          activeColor = colorMap[div.id];
      }
  });


  var tittle = document.querySelector('h1').textContent;
  var description = document.querySelector('input').value;
  var time = document.getElementById('time').textContent;
  const event = {
      title: tittle,
      description: description,
      date: time,
      color: activeColor
  }
      localStorage.clear();
      setTimeout(() => {
		  localStorage.setItem('evento', JSON.stringify(event));
	    }, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    const miBoton = document.getElementById("close");

miBoton.addEventListener("click", () => {
  window.parent.postMessage({
    type: "swal-confirm",
  }, "*");
});
});

function clear(){
    localStorage.clear();
}

