function timer(){
  Swal.fire({
      html: '<iframe src="time_select.html" style="width: 18em; height: 19em; border: none; margin: 0px;"></iframe>',
      showConfirmButton: false,
      padding: 0,
      customClass: 'sweetalert-lg',
    })
    .then(()=>{
      const date = localStorage.getItem("fecha");
      const fecha = new Date(date);
      document.getElementById('time').textContent = `${fecha.getHours() < 10 ? '0'+fecha.getHours():fecha.getHours()}:${fecha.getMinutes() < 10 ? '0'+fecha.getMinutes():fecha.getMinutes()}:${fecha.getSeconds() < 10 ? '0'+fecha.getSeconds():fecha.getSeconds()}`;
    });
}
function timeOnload(){
  const date = document.getElementById('time').textContent;
  var tiempo = new Date();
  tiempo.setHours(parseInt(date.substring(0,2)),parseInt(date.substring(3,5)),parseInt(date.substring(6)))
  setTimeout(() => {
    localStorage.clear();
    localStorage.setItem("fecha",tiempo.toISOString());
  }, 0);
}
