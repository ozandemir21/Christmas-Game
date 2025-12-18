const startbtn = document.querySelector("#Startbtn");
const gameEL = document.querySelector("#Game");
let scoreEL = document.querySelector("#score");
let score = 0;


startbtn.addEventListener("click", startGame);

function startGame()
{
    startbtn.disabled = true;
    setInterval(() => {
        const newPresent = document.createElement("div");
        gameEL.appendChild(newPresent);

        const x = Math.random() * (gameEL.clientWidth - newPresent.clientWidth);
        const y = Math.random() * (gameEL.clientHeight - newPresent.clientHeight);

        newPresent.style.left = x + "px";
        newPresent.style.top = y + "px";

        newPresent.addEventListener("click", points);
    }, 1000);


  

}

function points(event)
{
    event.target.remove();

    score = score + 1;

    scoreEL.innerHTML = score;

}