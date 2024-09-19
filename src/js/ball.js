function moveBall(dx, dy, dxd, dyd) {
    if (ball_coord.top <= board_coord.top) {
        dyd = 1;
    }
    if (ball_coord.bottom >= board_coord.bottom) {
        dyd = 0;
    }
    if (
        ball_coord.left <= paddle_common.right &&
        ball_coord.top >= paddle_common.top &&
        ball_coord.bottom <= paddle_common.bottom
    ) {
        dxd = 1;
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
    }
    if (
        ball_coord.right >= paddle_common2.left &&
        ball_coord.top >= paddle_common2.top &&
        ball_coord.bottom <= paddle_common2.bottom
    ) {
        dxd = 0;
        dx = Math.floor(Math.random() * 4) + 3;
        dy = Math.floor(Math.random() * 4) + 3;
    }
    
    if (
        ball_coord.left <= board_coord.left ||
        ball_coord.right >= board_coord.right
    ) {
        if (ball_coord.left <= board_coord.left) {
        score_2.innerHTML = +score_2.innerHTML + 1;
        } else {
        score_1.innerHTML = +score_1.innerHTML + 1;
        }
        gameState = 'start';
    
        ball_coord = initial_ball_coord;
        ball.style = initial_ball.style;
        message.innerHTML = 'Press Enter to Play Pong';
        message.style.left = 38 + 'vw';
        return;
}

ball.style.top = ball_coord.top + dy * (dyd == 0 ? -1 : 1) + 'px';
ball.style.left = ball_coord.left + dx * (dxd == 0 ? -1 : 1) + 'px';
ball_coord = ball.getBoundingClientRect();

requestAnimationFrame(() => {
        moveBall(dx, dy, dxd, dyd);
        initial_ball_coord = ball.getBoundingClientRect();
        paddle_common2 = document.getElementsByClassName("paddle")[1].getBoundingClientRect()
        paddle_common = document.getElementsByClassName("paddle")[0].getBoundingClientRect()
    });
}