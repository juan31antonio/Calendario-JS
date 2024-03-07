function toggleVisibility(clickedDiv) {
    const triangulos = document.querySelectorAll("#arrows div");
    
    for (const arrow of triangulos) {
        arrow.style.visibility = "hidden";
    }

    const divs = document.querySelectorAll("#div-container .box");
    const index = Array.from(divs).indexOf(clickedDiv);
    triangulos[index].style.visibility = "visible";
    
}