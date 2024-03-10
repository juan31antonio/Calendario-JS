document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var iframeEl = document.getElementById('miIframe');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      center: 'addEventButton'
    },
    customButtons: {
      addEventButton: {
        text: 'add event...',
        click: function() {
          Swal.fire({
            html: '<iframe src="new_event.html" style="width: 25em; height: 29em; border: none; margin: 0px;"></iframe>',
            showConfirmButton: false,
            padding: 0,
            customClass: 'sweetalert-lg',
          });
        }
      }
    }
  });
  calendar.render();
});

