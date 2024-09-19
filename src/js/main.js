//Player 1
function P1Move(event){
    if(event.key == "w") {
        console.log(
            "ArrowUpValues",
            board.getBoundingClientRect().top,
            paddle1.getBoundingClientRect().top - window.innerHeight * 0.06
        );
        paddle1.style.top =
        Math.max(
            board.getBoundingClientRect().top,
            paddle1.getBoundingClientRect().top - window.innerHeight * 0.06
            ) + 'px';
    }
    else if(event.key == "s") {
        console.log(
            "ArrowDownValues",
            board.getBoundingClientRect().bottom - paddle_common.height,
            paddle1.getBoundingClientRect().top + window.innerHeight * 0.06
        );

        paddle1.style.top =
        Math.min(
            board.getBoundingClientRect().bottom - paddle_common.height,
            paddle1.getBoundingClientRect().top + window.innerHeight * 0.06
            ) + 'px';
    }
}

//Player 2
function P2Move(event){
    if(event.key == "ArrowUp") {
        console.log(
            "ArrowUpValues",
            board.getBoundingClientRect().top,
            paddle2.getBoundingClientRect().top - window.innerHeight * 0.06
        );
        paddle2.style.top =
        Math.max(
            board.getBoundingClientRect().top,
            paddle2.getBoundingClientRect().top - window.innerHeight * 0.06
            ) + 'px';
    }
    else if(event.key == "ArrowDown") {
        console.log(
            "ArrowDownValues",
            board.getBoundingClientRect().bottom - paddle_common2.height,
            paddle2.getBoundingClientRect().top + window.innerHeight * 0.06
        );

        paddle2.style.top =
        Math.min(
            board.getBoundingClientRect().bottom - paddle_common2.height,
            paddle2.getBoundingClientRect().top + window.innerHeight * 0.06
            ) + 'px';
    }
}


document.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        gameState = gameState == 'start' ? 'play' : 'start';
        if (gameState == 'play') {
            message.innerHTML = 'Game Started';
            message.style.left = 42 + 'vw';
            requestAnimationFrame(() => {
                dx = Math.floor(Math.random() * 4) + 3;
                dy = Math.floor(Math.random() * 4) + 3;
                dxd = Math.floor(Math.random() * 2);
                dyd = Math.floor(Math.random() * 2);
                moveBall(dx, dy, dxd, dyd);
            });
        }
    }

    if (gameState == 'play') {
        //Player 1
        P1Move(event)

        //Player 2
        P2Move(event)
    }
});