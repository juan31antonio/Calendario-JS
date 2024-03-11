function timer(){
<<<<<<< Updated upstream
    Swal.fire({
        html: '<iframe src="time_select.html" style="width: 18em; height: 19em; border: none; margin: 0px;"></iframe>',
        showConfirmButton: false,
        padding: 0,
        customClass: 'sweetalert-lg',
      });
}
=======
  Swal.fire({
      html: '<iframe src="time_select.html" style="width: 18em; height: 19em; border: none; margin: 0px;"></iframe>',
      showConfirmButton: false,
      padding: 0,
      customClass: 'sweetalert-lg',
    })
    .then(()=>{
      const date = localStorage.getItem("fecha");
      const fecha = new Date(date);
      document.getElementById('time').textContent = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    });
}
>>>>>>> Stashed changes
