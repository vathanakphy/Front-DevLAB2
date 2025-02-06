function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBg(){
    let bg_color = document.getElementById("result-color");
    let col = getRandomHexColor();
    bg_color.innerText = col;
    document.body.style.backgroundColor = col;
}