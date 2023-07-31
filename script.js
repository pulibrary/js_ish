const game = document.querySelector('.game');
let html = ``;

for (let i = 0; i < 42; i++) {
    html+= `<div class="bubble"></div>`
}

game.innerHTML = html;

let player1 = true;
let player2 = false;

game.addEventListener('click', () => {
    if (player1) {
        
    }
});