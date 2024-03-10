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
			var dateStr = prompt('Enter a date in YYYY-MM-DD format');
			var date = new Date(dateStr + 'T00:00:00'); // will be in local time
  
			if (!isNaN(date.valueOf())) { // valid?
			  calendar.addEvent({
				title: 'dynamic event',
				start: date,
				allDay: true
			  });
			  alert('Great. Now, update your database...');
			} else {
			  alert('Invalid date.');
			}
		  }
		}
	  },
	  // Aquí añadimos un evento para mostrar el iframe cuando se haga clic en el botón personalizado
	  eventClick: function(info) {
	    if (info.event.id === 'customButton') {
	      iframeEl.style.display = 'block';
	    }
	  }
	});
  
	calendar.render();
});
