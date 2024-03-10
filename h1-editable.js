function h1(){
    var h = document.querySelector('h1');
    h.addEventListener('click', () => {
    h.contentEditable = true;
    });
    h.addEventListener('keydown',letterCount);
}
function letterCount(event){
    var h = document.querySelector('h1');
    let words = h.textContent;
    if(words.length >= 18){
        event.preventDefault();
    }
}
window.addEventListener('DOMContentLoaded', h1);
