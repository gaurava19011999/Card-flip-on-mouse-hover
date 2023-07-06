function dropShow(){
    const c = document.getElementById("nav-drop");
    c.style.display="block";
    document.getElementById("nav-btn-show").style.display="none";
    document.getElementById("nav-btn-hide").style.display="block";    
}
function drophide(){
    const c = document.getElementById("nav-drop");
    c.style.display="none";
    document.getElementById("nav-btn-hide").style.display="none";
    document.getElementById("nav-btn-show").style.display="block";
}

function flipD(){
    const card = document.getElementById('flipImage');
    card.className="flip-d";
    card.src="sampleCard2.jpg"
}
function flipI(){
    const card = document.getElementById('flipImage');
    card.className="flip-i";
    setTimeout(500);
    card.src="sampleCard1.avif"
}