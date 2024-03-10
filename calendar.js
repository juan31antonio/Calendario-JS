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
			iframeEl.style.display = 'block'
			
		  }
		}
	  } 
	});
	calendar.render();
});
