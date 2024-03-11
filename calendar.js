document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var iframeEl = document.getElementById('miIframe');
    var lastInfo; 

    var calendar = new FullCalendar.Calendar(calendarEl,{
        dateClick: function(info) {
            lastInfo = info; 
            const swal = Swal.fire({
                html: '<iframe src="new_event.html" style="width: 25em; height: 29em; border: none; margin: 0px;"></iframe>',
                showConfirmButton: false,
                padding: 0,
                customClass: 'sweetalert-lg',
            });
        },
		editable: true,
		dayMaxEvents: true
    },
	);
    window.addEventListener("message", (event) => {
        if (event.data.type === "swal-confirm") {
            parseEvent(calendar, lastInfo.dateStr); 
            swal.close();
        }
    });
    calendar.render();
});

function parseEvent(calendar, dateStr){
    setTimeout(() => {
        var parseo = JSON.parse(localStorage.getItem('evento'));
        calendar.addEvent({
            title: parseo.title,
            description: parseo.description,
            start: dateStr+'T'+parseo.date,
            color: parseo.color 
        });
    }, 10);
}