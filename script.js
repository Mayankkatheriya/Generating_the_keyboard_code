let keyBox = document.querySelector(".keyBox");
const audio = new Audio("./mixkit-hard-single-key-press-in-a-laptop-2542.wav");
document.body.addEventListener("keydown", function(e){
    console.log(e);
    let key = e.key;
    let keyCode = e.keyCode;
    console.log(keyCode);
    keyBox.innerHTML = `
    <h1 class = "key">You Pressed: <span>${key}</span></h1>
    <div class = "code">${keyCode}</div>`;
    audio.play();
});