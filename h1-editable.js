function h1(){
    const h1 = document.querySelector('h1');
    h1.addEventListener('click', () => {
    h1.contentEditable = true;
    });
    h1.addEventListener('keydown',letterCount());
}
function letterCount(event){
    let words = count(h1);
    console.log(words)
    if(words >= 18){
        event.preventDefault();
    }
}
function count(words){
    var word = words.textContent;
    let letters = word.split("");
    return letters.length;
}

