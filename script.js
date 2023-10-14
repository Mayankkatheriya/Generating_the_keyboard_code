let keyBox = document.querySelector(".keyBox");
const audio = new Audio("./audio1.mp3");
document.body.addEventListener("keydown", function(e){
    audio.play();
    let key = e.key;
    if(e.shiftKey && e.keyCode!=16){
        key = `Shift+${e.key}`
    }
    if(e.ctrlKey&& e.keyCode!=17){
        key = `Ctrl+${e.key}`
    }
    let keyCode = e.keyCode;
    keyBox.innerHTML = `
    <h1 class = "key">You Pressed: <span>${key}</span></h1>
    <div class = "code">${keyCode}</div>`;
});