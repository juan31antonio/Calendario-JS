if(localStorage.getItem("fecha")){
    var date = new Date(localStorage.getItem("fecha"));
}
else{
   var date = new Date(); 
}
        var hours = Array.from({length: 24}, (_, i) => i);
        var minutes = Array.from({length: 60}, (_, i) => i); 
        var seconds = Array.from({length: 60}, (_, i) => i);
        var state = 0;
        var fecha = date.toISOString();
        localStorage.setItem("fecha",fecha);
        function moveFocus(direction) {
            if (direction === 'next') {
                if (state < 2) {
                    state++;
                    setFocus(state);
                }
            }
            else if (direction === 'prev') {
                if (state > 0) {
                    state--;
                    setFocus(state);
                }
            }
        }
    
        function clearFocus() {
            $('#hour').removeClass('active');
            $('#minute').removeClass('active');
            $('#seconds').removeClass('active');
        }
    
        function setFocus(newState) {
            clearFocus();
            state = newState;
    
            if (state === 0) {
                $('#hour').addClass('active');
            } else if (state === 1) {
                $('#minute').addClass('active');
            } else if (state === 2) {
                $('#seconds').addClass('active');
            }
        }
    
        function setValue(change) {
            if (state === 0) {
                var h = date.getHours() + change;
                h = (h < 0) ? 23 : (h > 23) ? 0 :h;
                date.setHours(h);
                var fecha = date.toISOString();
                localStorage.setItem("fecha",fecha);
                $('#hour').html((h < 10 ? '0' :'') + h);
            }
            else if (state === 1) {
                var m = date.getMinutes() + change;
                m = (m < 0) ? 59 :(m > 59) ? 0 :m; 
                date.setMinutes(m);
                var fecha = date.toISOString();
                localStorage.setItem("fecha",fecha);
                $('#minute').html((m < 10 ? '0' :'') + m);
            }
            else if (state === 2) {
                var s = date.getSeconds() + change;
                s = (s < 0) ? 59 :(s > 59) ? 0 :s; 
                date.setSeconds(s);
                var fecha = date.toISOString();
                localStorage.setItem("fecha",fecha);
                $('#seconds').html((s < 10 ? '0' :'') + s);
            }
        }
    
        $(function() {
            var virtual_knob = document.getElementById("virtual_knob");
            var mc = new Hammer(virtual_knob);
            var prevAngle = -1;

            mc.on("pan panstart panend tap", function(event) {
                console.log(event.type)
                if (event.type === 'panstart') {
                prevAngle = -90;
                }
                else if (event.type === 'panend' || event.type === 'tap') {
                moveFocus('next');
                virtual_knob.style.transform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
                virtual_knob.style.webkitTransform = 'translateX(-50%) translateY(-50%) rotate(0deg)';
                }
                if (Math.abs(prevAngle - event.angle) > 300)
                prevAngle = -prevAngle;
                var a1 = Math.floor(event.angle / 30);
                var a2 = Math.floor(prevAngle / 30);
                if (a1 != a2) {
                setValue(a1 - a2);
                }

                if (event.type !== 'panend' && event.type !== 'tap') {
                virtual_knob.style.transform = 'translateX(-50%) translateY(-50%) rotate(' + (event.angle + 90) + 'deg)';
                virtual_knob.style.webkitTransform = 'translateX(-50%) translateY(-50%) rotate(' + (event.angle + 90) + 'deg)';
                }
                prevAngle = event.angle;
            });

            $('#hour').html(date.getHours() < 10 ? '0'+date.getHours():date.getHours());
            $('#minute').html(date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes());
            $('#seconds').html(date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds());
            
            $('#hour').click(function () { setFocus(0); });
            $('#minute').click(function () { setFocus(1); });
            $('#seconds').click(function () { setFocus(2); });
        });